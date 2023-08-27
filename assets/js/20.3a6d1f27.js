(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{295:function(e,l,t){"use strict";t.r(l);var v=t(10),_=Object(v.a)({},(function(){var e=this,l=e._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"_1-dubbo的执行过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-dubbo的执行过程"}},[e._v("#")]),e._v(" 1. Dubbo的执行过程")]),e._v(" "),l("h1",{attrs:{id:"_2-dubbo是如何实现远程调用的"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-dubbo是如何实现远程调用的"}},[e._v("#")]),e._v(" 2. Dubbo是如何实现远程调用的")]),e._v(" "),l("h1",{attrs:{id:"_3-dubbo实现了哪些功能"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-dubbo实现了哪些功能"}},[e._v("#")]),e._v(" 3. Dubbo实现了哪些功能")]),e._v(" "),l("h1",{attrs:{id:"_4-怎么配置重试策略"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-怎么配置重试策略"}},[e._v("#")]),e._v(" 4. 怎么配置重试策略")]),e._v(" "),l("ol",{attrs:{start:"5"}},[l("li",[l("p",[e._v("dubbo的优缺点")]),e._v(" "),l("ol",[l("li",[e._v("优点：\n"),l("ol",[l("li",[e._v("与Spring整合，接入简单松耦合")]),e._v(" "),l("li",[e._v("多种序列化协议支持")]),e._v(" "),l("li",[e._v("注册中心只负责注册查找，不负责请求转发，压力小")]),e._v(" "),l("li",[e._v("注册中心宕机影响消费者，消费者本地缓存服务地址列表")]),e._v(" "),l("li",[e._v("注册中心对等集群，宕掉一台自动切换到另外 一台")]),e._v(" "),l("li",[e._v("服务提供者无状态，可动态部署，注册中心负责推送")]),e._v(" "),l("li",[e._v("统计无压力，本地内存中累计次数，每分钟发送注册中心")]),e._v(" "),l("li",[e._v("消费者调用服务者，自动软负载均衡")]),e._v(" "),l("li",[e._v("通过服务中心可追踪依赖关系")]),e._v(" "),l("li",[e._v("监控中心为扩容和降级提供依据")])])]),e._v(" "),l("li",[e._v("缺点\n"),l("ol",[l("li",[e._v("消费者仍需要依赖配置中心")]),e._v(" "),l("li",[e._v("消费者仍需要依赖jar包配置provider")]),e._v(" "),l("li",[e._v("提供者文档管理功能缺失")]),e._v(" "),l("li",[e._v("无统一入口")]),e._v(" "),l("li",[e._v("不支持OAuth2.0")]),e._v(" "),l("li",[e._v("内部鉴权不方便管理")]),e._v(" "),l("li",[e._v("无外部应用鉴权")]),e._v(" "),l("li",[e._v("接口基本裸奔，无法直接对外暴露服务")]),e._v(" "),l("li",[e._v("IT治理不方便")])])])])]),e._v(" "),l("li",[l("p",[e._v("dubbo类怎么加载的")])]),e._v(" "),l("li",[l("p",[e._v("dubbo异步调用怎么实现的")]),e._v(" "),l("ol",[l("li",[e._v("基于CompletableFuture接口")]),e._v(" "),l("li",[e._v("提供方定义一个返回类型为CompletableFuture的方法,")])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v('public interface AsyncService {\n    CompletableFuture<String> sayHello(String name);\n}\n\npublic class AsyncServiceImpl implements AsyncService {\n    @Override\n    public CompletableFuture<String> sayHello(String name) {\n        RpcContext savedContext = RpcContext.getContext();\n        // 建议为supplyAsync提供自定义线程池，避免使用JDK公用线程池\n        return CompletableFuture.supplyAsync(() -> {\n            System.out.println(savedContext.getAttachment("consumer-key1"));\n            try {\n                Thread.sleep(5000);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            return "async response from provider.";\n        });\n    }\n}\n\n')])])]),l("ol",{attrs:{start:"3"}},[l("li",[e._v("消费方获取CompletableFuture的返回值")])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v('xml配置：\n<dubbo:reference id="asyncService" interface="org.apache.dubbo.samples.governance.api.AsyncService">\n      <dubbo:method name="sayHello" async="true" />\n</dubbo:reference>\n\n// 调用直接返回CompletableFuture\nCompletableFuture<String> future = asyncService.sayHello("async call request");\n// 增加回调\nfuture.whenComplete((v, t) -> {\n    if (t != null) {\n        t.printStackTrace();\n    } else {\n        System.out.println("Response: " + v);\n    }\n});\n// 早于结果输出\nSystem.out.println("Executed before response return.");\n\n')])])])]),e._v(" "),l("li",[l("p",[e._v("对服务治理的理解")]),e._v(" "),l("ol",[l("li",[e._v("服务治理最基础的功能服务注册，服务发现，这两点可以保证服务消费方找到需要的提供者，完成服务调用")]),e._v(" "),l("li",[e._v("然后是负载均衡，多个服务提供者之间怎么选择")]),e._v(" "),l("li",[e._v("然后是服务之间的通信，服务如何实现远程调用，比如使用netty，使用什么协议，比如dubbo，http")]),e._v(" "),l("li",[e._v("集群容错，出现调用失败时如何处理：\n"),l("ol",[l("li",[l("p",[e._v("dubbo的处理策略")]),e._v(" "),l("ol",[l("li",[e._v("缺省为 failover 重试")]),e._v(" "),l("li",[e._v("Failfast 快速失败 只发起一次调用，失败立即报错。通常用于非幂等性的写操作")]),e._v(" "),l("li",[e._v("Failback 失败自动恢复，后台记录失败请求，定时重发。通常用于消息通知操作")]),e._v(" "),l("li",[e._v('Forking 并行调用多个服务器，只要一个成功即返回。通常用于实时性要求较高的读操作，但需要浪费更多服务资源。可通过forks="2"来设置最大并行数')])]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v('配置方式\n提供者：<dubbo:service cluster="failsafe" />  \n消费者：<dubbo:reference cluster="failsafe" />\n')])])]),l("ol",{attrs:{start:"5"}},[l("li",[e._v("再就是对服务的监控，调用次数，耗时 ，tp99，报警信息等，链路追踪工具 CAT")]),e._v(" "),l("li",[e._v("还要有网关，限制对服务的调用次数限流，降级，熔断（Hystrix）")]),e._v(" "),l("li",[e._v("服务配置：Spring Cloud Config，Disconf")]),e._v(" "),l("li",[e._v("服务熔断：Hystrix，resilience4j")])])])])])])]),e._v(" "),l("li",[l("p",[e._v("微服务的优缺点：(https://www.cnblogs.com/X-knight/p/11359836.html)")]),e._v(" "),l("ol",[l("li",[e._v("优点\n"),l("ol",[l("li",[e._v("降低系统复杂度：每个服务都比较简单，只关注于一个业务功能")]),e._v(" "),l("li",[e._v("松耦合：微服务架构方式是松耦合的，每个微服务可由不同团队独立开发，互不影响。")]),e._v(" "),l("li",[e._v("跨语言：只要符合服务 API 契约，开发人员可以自由选择开发技术。这就意味着开发人员可以采用新技术编写或重构服务，由于服务相对较小，所以这并不会对整体应用造成太大影响。")]),e._v(" "),l("li",[e._v("独立部署：微服务架构可以使每个微服务独立部署。开发人员无需协调对服务升级或更改的部署。这些更改可以在测试通过后立即部署。所以微服务架构也使得 CI／CD 成为可能。")])])]),e._v(" "),l("li",[e._v("缺点\n"),l("ol",[l("li",[e._v("微服务强调了服务大小，但实际上这并没有一个统一的标准：业务逻辑应该按照什么规则划分为微服务，这本身就是一个经验工程。有些开发者主张 10-100 行代码就应该建立一个微服务。虽然建立小型服务是微服务架构崇尚的，但要记住，微服务是达到目的的手段，而不是目标。微服务的目标是充分分解应用程序，以促进敏捷开发和持续集成部署。")]),e._v(" "),l("li",[e._v("微服务的分布式特点带来的复杂性：开发人员需要基于 RPC 或者消息实现微服务之间的调用和通信，而这就使得服务之间的发现、服务调用链的跟踪和质量问题变得的相当棘手。")]),e._v(" "),l("li",[e._v("分区的数据库体系和分布式事务：更新多个业务实体的业务交易相当普遍，不同服务可能拥有不同的数据库。CAP 原理的约束，使得我们不得不放弃传统的强一致性，而转而追求最终一致性，这个对开发人员来说是一个挑战。")]),e._v(" "),l("li",[e._v("测试挑战：传统的单体WEB应用只需测试单一的 REST API 即可，而对微服务进行测试，需要启动它依赖的所有其他服务。这种复杂性不可低估。")]),e._v(" "),l("li",[e._v("跨多个服务的更改：比如在传统单体应用中，若有 A、B、C 三个服务需要更改，A 依赖 B，B 依赖 C。我们只需更改相应的模块，然后一次性部署即可。但是在微服务架构中，我们需要仔细规划和协调每个服务的变更部署。我们需要先更新 C，然后更新 B，最后更新 A。")]),e._v(" "),l("li",[e._v("部署复杂：微服务由不同的大量服务构成。每种服务可能拥有自己的配置、应用实例数量以及基础服务地址。这里就需要不同的配置、部署、扩展和监控组件。此外，我们还需要服务发现机制，以便服务可以发现与其通信的其他服务的地址。因此，成功部署微服务应用需要开发人员有更好地部署策略和高度自动化的水平。")]),e._v(" "),l("li",[e._v("总的来说（问题和挑战）：API Gateway、服务间调用、服务发现、服务容错、服务部署、数据调用。")]),e._v(" "),l("li"),e._v(" "),l("li")])])])]),e._v(" "),l("li",[l("p",[e._v("什么样的系统不适合使用微服务")]),e._v(" "),l("ol",[l("li",[e._v("小团队")]),e._v(" "),l("li",[e._v("对响应时间有很高要求的系统")]),e._v(" "),l("li",[e._v("高度集中的系统")])])]),e._v(" "),l("li",[l("p",[e._v("服务降级与服务熔断有什么异同点")])]),e._v(" "),l("li",[l("p",[e._v("Dubbo的线程模型")])]),e._v(" "),l("li",[l("p",[e._v("RPC协议相对于http协议有哪些优缺点")]),e._v(" "),l("ol",[l("li",[e._v("HTTP 和 RPC 其实是两个维度的东西， HTTP 指的是通信协议。")]),e._v(" "),l("li",[e._v("而 RPC 则是远程调用，其对应的是本地调用。")]),e._v(" "),l("li",[e._v("RPC 的通信可以用 HTTP 协议，也可以自定义协议，是不做约束的")]),e._v(" "),l("li",[e._v("速度来看，RPC要比http更快，虽然底层都是TCP，但是http协议的信息往往比较臃肿")]),e._v(" "),l("li",[e._v("难度来看，RPC实现较为复杂，http相对比较简单")]),e._v(" "),l("li",[e._v("灵活性来看，http更胜一筹，因为它不关心实现细节，跨平台、跨语言。")]),e._v(" "),l("li",[e._v("应用场景\n"),l("ol",[l("li",[e._v("如果对效率要求更高，并且开发过程使用统一的技术栈，那么用RPC还是不错的。")]),e._v(" "),l("li",[e._v("如果需要更加灵活，跨语言、跨平台，显然http更合适")])])])])]),e._v(" "),l("li",[l("p",[e._v("常见链路追踪系统\nGoogle的Dapper，阿里的鹰眼，大众点评的CAT，Twitter的Zipkin，LINE的pinpoint，国产的skywalking，国内一般用CAT和zipkin比较多")])])])])}),[],!1,null,null,null);l.default=_.exports}}]);