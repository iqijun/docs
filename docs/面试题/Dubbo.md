---
title: 常见dubbo面试题
---

# 1. Dubbo的执行过程
# 2. Dubbo是如何实现远程调用的
# 3. Dubbo实现了哪些功能
# 4. 怎么配置重试策略
5. dubbo的优缺点
    1. 优点：
        1. 与Spring整合，接入简单松耦合
        2. 多种序列化协议支持
        3. 注册中心只负责注册查找，不负责请求转发，压力小
        4. 注册中心宕机影响消费者，消费者本地缓存服务地址列表
        5. 注册中心对等集群，宕掉一台自动切换到另外 一台
        6. 服务提供者无状态，可动态部署，注册中心负责推送
        7. 统计无压力，本地内存中累计次数，每分钟发送注册中心
        8. 消费者调用服务者，自动软负载均衡
        9. 通过服务中心可追踪依赖关系
        10. 监控中心为扩容和降级提供依据
    2. 缺点
        1. 消费者仍需要依赖配置中心
        2. 消费者仍需要依赖jar包配置provider
        3. 提供者文档管理功能缺失
        4. 无统一入口
        5. 不支持OAuth2.0
        6. 内部鉴权不方便管理
        7. 无外部应用鉴权
        8. 接口基本裸奔，无法直接对外暴露服务
        9. IT治理不方便
6. dubbo类怎么加载的
7. dubbo异步调用怎么实现的
    1. 基于CompletableFuture接口
    2. 提供方定义一个返回类型为CompletableFuture的方法,
    ```
    public interface AsyncService {
        CompletableFuture<String> sayHello(String name);
    }
    
    public class AsyncServiceImpl implements AsyncService {
        @Override
        public CompletableFuture<String> sayHello(String name) {
            RpcContext savedContext = RpcContext.getContext();
            // 建议为supplyAsync提供自定义线程池，避免使用JDK公用线程池
            return CompletableFuture.supplyAsync(() -> {
                System.out.println(savedContext.getAttachment("consumer-key1"));
                try {
                    Thread.sleep(5000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                return "async response from provider.";
            });
        }
    }
    
    ```
    3. 消费方获取CompletableFuture的返回值
    
    ```
    xml配置：
    <dubbo:reference id="asyncService" interface="org.apache.dubbo.samples.governance.api.AsyncService">
          <dubbo:method name="sayHello" async="true" />
    </dubbo:reference>
    
    // 调用直接返回CompletableFuture
    CompletableFuture<String> future = asyncService.sayHello("async call request");
    // 增加回调
    future.whenComplete((v, t) -> {
        if (t != null) {
            t.printStackTrace();
        } else {
            System.out.println("Response: " + v);
        }
    });
    // 早于结果输出
    System.out.println("Executed before response return.");
    
    ```

8. 对服务治理的理解
    1. 服务治理最基础的功能服务注册，服务发现，这两点可以保证服务消费方找到需要的提供者，完成服务调用
    2. 然后是负载均衡，多个服务提供者之间怎么选择
    3. 然后是服务之间的通信，服务如何实现远程调用，比如使用netty，使用什么协议，比如dubbo，http
    4. 集群容错，出现调用失败时如何处理：
        1. dubbo的处理策略
            1. 缺省为 failover 重试
            2. Failfast 快速失败 只发起一次调用，失败立即报错。通常用于非幂等性的写操作
            3. Failback 失败自动恢复，后台记录失败请求，定时重发。通常用于消息通知操作
            4. Forking 并行调用多个服务器，只要一个成功即返回。通常用于实时性要求较高的读操作，但需要浪费更多服务资源。可通过forks="2"来设置最大并行数

            ```
            配置方式
            提供者：<dubbo:service cluster="failsafe" />  
            消费者：<dubbo:reference cluster="failsafe" />
            ```

            5. 再就是对服务的监控，调用次数，耗时 ，tp99，报警信息等，链路追踪工具 CAT 
            6. 还要有网关，限制对服务的调用次数限流，降级，熔断（Hystrix）
            7. 服务配置：Spring Cloud Config，Disconf
            8. 服务熔断：Hystrix，resilience4j

9. 微服务的优缺点：(https://www.cnblogs.com/X-knight/p/11359836.html)
    1. 优点
        1. 降低系统复杂度：每个服务都比较简单，只关注于一个业务功能
        2. 松耦合：微服务架构方式是松耦合的，每个微服务可由不同团队独立开发，互不影响。
        3. 跨语言：只要符合服务 API 契约，开发人员可以自由选择开发技术。这就意味着开发人员可以采用新技术编写或重构服务，由于服务相对较小，所以这并不会对整体应用造成太大影响。
        4. 独立部署：微服务架构可以使每个微服务独立部署。开发人员无需协调对服务升级或更改的部署。这些更改可以在测试通过后立即部署。所以微服务架构也使得 CI／CD 成为可能。
    2. 缺点
        1. 微服务强调了服务大小，但实际上这并没有一个统一的标准：业务逻辑应该按照什么规则划分为微服务，这本身就是一个经验工程。有些开发者主张 10-100 行代码就应该建立一个微服务。虽然建立小型服务是微服务架构崇尚的，但要记住，微服务是达到目的的手段，而不是目标。微服务的目标是充分分解应用程序，以促进敏捷开发和持续集成部署。
        2. 微服务的分布式特点带来的复杂性：开发人员需要基于 RPC 或者消息实现微服务之间的调用和通信，而这就使得服务之间的发现、服务调用链的跟踪和质量问题变得的相当棘手。
        3. 分区的数据库体系和分布式事务：更新多个业务实体的业务交易相当普遍，不同服务可能拥有不同的数据库。CAP 原理的约束，使得我们不得不放弃传统的强一致性，而转而追求最终一致性，这个对开发人员来说是一个挑战。
        4. 测试挑战：传统的单体WEB应用只需测试单一的 REST API 即可，而对微服务进行测试，需要启动它依赖的所有其他服务。这种复杂性不可低估。
        5. 跨多个服务的更改：比如在传统单体应用中，若有 A、B、C 三个服务需要更改，A 依赖 B，B 依赖 C。我们只需更改相应的模块，然后一次性部署即可。但是在微服务架构中，我们需要仔细规划和协调每个服务的变更部署。我们需要先更新 C，然后更新 B，最后更新 A。
        6. 部署复杂：微服务由不同的大量服务构成。每种服务可能拥有自己的配置、应用实例数量以及基础服务地址。这里就需要不同的配置、部署、扩展和监控组件。此外，我们还需要服务发现机制，以便服务可以发现与其通信的其他服务的地址。因此，成功部署微服务应用需要开发人员有更好地部署策略和高度自动化的水平。
        7. 总的来说（问题和挑战）：API Gateway、服务间调用、服务发现、服务容错、服务部署、数据调用。
        8. 
        9. 
10. 什么样的系统不适合使用微服务
    1. 小团队
    2. 对响应时间有很高要求的系统
    3. 高度集中的系统
11. 服务降级与服务熔断有什么异同点
12. Dubbo的线程模型
13. RPC协议相对于http协议有哪些优缺点
    1. HTTP 和 RPC 其实是两个维度的东西， HTTP 指的是通信协议。
    2. 而 RPC 则是远程调用，其对应的是本地调用。
    3. RPC 的通信可以用 HTTP 协议，也可以自定义协议，是不做约束的 
    4. 速度来看，RPC要比http更快，虽然底层都是TCP，但是http协议的信息往往比较臃肿
    5. 难度来看，RPC实现较为复杂，http相对比较简单
    6. 灵活性来看，http更胜一筹，因为它不关心实现细节，跨平台、跨语言。
    7. 应用场景
        1. 如果对效率要求更高，并且开发过程使用统一的技术栈，那么用RPC还是不错的。
        2. 如果需要更加灵活，跨语言、跨平台，显然http更合适

15. 常见链路追踪系统
    Google的Dapper，阿里的鹰眼，大众点评的CAT，Twitter的Zipkin，LINE的pinpoint，国产的skywalking，国内一般用CAT和zipkin比较多 
