(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{291:function(_,v,p){"use strict";p.r(v);var t=p(10),a=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_14丨代码模型-下-如何保证领域模型与代码模型的一致性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14丨代码模型-下-如何保证领域模型与代码模型的一致性"}},[_._v("#")]),_._v(" 14丨代码模型（下）：如何保证领域模型与代码模型的一致性？")]),_._v(" "),v("p",[_._v("1.第2页 【高亮】")]),_._v(" "),v("p",[_._v("在构建领域模型时，我们往往是站在业务视 角的，并且有些领域对象还带着业务语言。我们还需")]),_._v(" "),v("p",[_._v("要将领域模型作为微服务设计的输入， 对领域对象进行设计和转换，让领域对象与代码对象建立")]),_._v(" "),v("p",[_._v("映射关系")]),_._v(" "),v("p",[_._v("2.第2页 【高亮】")]),_._v(" "),v("p",[_._v("完成微服务拆分后，领域模型的边界和领域对象就基本确定了。 我们第一个重要的工作就是，整")]),_._v(" "),v("p",[_._v("理事件风暴过程中产生的各个领域对象，比如：聚合、实 体、命令和领域事件等内容，将这些领")]),_._v(" "),v("p",[_._v("域对象和业务行为记录到下面的表格中")]),_._v(" "),v("p",[_._v("3.第2页 【高亮】")]),_._v(" "),v("p",[_._v("表格里包含了：领域模型、聚合、领域对象和领域类型四个维度")]),_._v(" "),v("p",[_._v("4.第2页 【高亮】")]),_._v(" "),v("p",[_._v("领域类型主要标识领域对象的属性，比如：聚合根、实体、命令和领域事件等类型")]),_._v(" "),v("p",[_._v("5.第3页 【高亮】")]),_._v(" "),v("p",[_._v("从领域模型到微服务的设计 从领域模型到微服务落地，我们还需要做进一步的设计和分析。事件")]),_._v(" "),v("p",[_._v("风暴中提取的领域对 象，还需要经过用户故事或领域故事分析，以及微服务设计，才能用于微服")]),_._v(" "),v("p",[_._v("务系统开发。 这个过程会比事件风暴来的更深入和细致。主要关注内容如下： 分析微服务内有哪")]),_._v(" "),v("p",[_._v("些服务？ 服务所在的分层？ 应用服务由哪些服务组合和编排完成？ 领域服务包括哪些实体的业")]),_._v(" "),v("p",[_._v("务逻辑？ 采用充血模型的实体有哪些属性和方法？ 有哪些值对象？ 哪个实体是聚合根等？")]),_._v(" "),v("p",[_._v("6.第4页 【高亮】")]),_._v(" "),v("p",[_._v("这个设计过程建议参与的角色有：DDD 专家、架构师、设计人员和开发经理7.第4页 【高亮】")]),_._v(" "),v("p",[_._v("事件风暴结束时，领域模型聚合内一般会有：聚合、实体、命令和领域事件等领域对象。在 完成")]),_._v(" "),v("p",[_._v("故事分析和微服务设计后，微服务的聚合内一般会有：聚合、聚合根、实体、值对象、 领域事件")]),_._v(" "),v("p",[_._v("、领域服务和仓储等领域对象。")]),_._v(" "),v("p",[_._v("8.第4页 【高亮】")]),_._v(" "),v("p",[_._v("大多数情况下，领域模型的业务实体与微服务的数据库实体是一一对应的。但某些领域模型 的实")]),_._v(" "),v("p",[_._v("体在微服务设计时，可能会被设计为多个数据实体，或者实体的某些属性被设计为值对 象。")]),_._v(" "),v("p",[_._v("9.第4页 【高亮】")]),_._v(" "),v("p",[_._v("聚合根来源于领域模型")]),_._v(" "),v("p",[_._v("10.第5页 【高亮】")]),_._v(" "),v("p",[_._v("聚合根是一种特殊的实体，它有自己的属性和方法。聚合根可以实现聚合之间的对象引用， 还可")]),_._v(" "),v("p",[_._v("以引用聚合内的所有实体")]),_._v(" "),v("p",[_._v("11.第5页 【高亮】")]),_._v(" "),v("p",[_._v("根据需要将某些实体的某些属性或属性集设计为值对象。值对象类放在代码模型的 Entity 目录结")]),_._v(" "),v("p",[_._v("构下")]),_._v(" "),v("p",[_._v("12.第5页 【高亮】")]),_._v(" "),v("p",[_._v("首先确定领 域事件发生在微服务内还是微服务之间。然后设计事件实体对象，事件的发布和订阅")]),_._v(" "),v("p",[_._v("机制， 以及事件的处理机制。判断是否需要引入事件总线或消息中间件。")]),_._v(" "),v("p",[_._v("13.第5页 【高亮】")]),_._v(" "),v("p",[_._v("如果领域模型中领域事件会触发下一步的业务操作，我们就需要设计领域事件")]),_._v(" "),v("p",[_._v("14.第5页 【高亮】领域事件实体和处理类放在领域层的 Event 目录结构下。领域事件的发布和订阅类我建议 放在应")]),_._v(" "),v("p",[_._v("用层的 Event 目录结构下")]),_._v(" "),v("p",[_._v("15.第5页 【高亮】")]),_._v(" "),v("p",[_._v("如果一个业务动作或行为跨多个实体，我们就需要设计领域服务。领域服务通过对多个实体 和实")]),_._v(" "),v("p",[_._v("体方法进行组合，完成核心业务逻辑。")]),_._v(" "),v("p",[_._v("16.第5页 【高亮】")]),_._v(" "),v("p",[_._v("你可以认为领域服务是位于实体方法之上和应用 服务之下的一层业务逻辑。")]),_._v(" "),v("p",[_._v("17.第5页 【高亮】")]),_._v(" "),v("p",[_._v("按照严格分层架构层的依赖关系，如果实体的方法需要暴露给应用层，它需要封装成领域服 务后")]),_._v(" "),v("p",[_._v("才可以被应用服务调用。所以如果有的实体方法需要被前端应用调用，我们会将它封装")]),_._v(" "),v("p",[_._v("18.第6页 【高亮】")]),_._v(" "),v("p",[_._v("成领域服务，然后再封装为应用服务。")]),_._v(" "),v("p",[_._v("19.第6页 【高亮】")]),_._v(" "),v("p",[_._v("领域服务类放在领域层的 Service 目录结构下。")]),_._v(" "),v("p",[_._v("20.第6页 【高亮】")]),_._v(" "),v("p",[_._v("每一个聚合都有一个仓储，仓储主要用来完成数据查询和持久化操作。仓储包括仓储的接口 和仓")]),_._v(" "),v("p",[_._v("储实现，通过依赖倒置实现应用业务逻辑与数据库资源逻辑的解耦。")]),_._v(" "),v("p",[_._v("21.第6页 【高亮】")]),_._v(" "),v("p",[_._v("应用层的主要领域对象是应用服务和事件的发布以及订阅")]),_._v(" "),v("p",[_._v("22.第6页 【高亮】在事件风暴或领域故事分析时，我们往往会根据用户或系统发起的命令，来设计服务或实体 方法")]),_._v(" "),v("p",[_._v("。为了响应这个命令，我们需要分析和记录： 在应用层和领域层分别会发生哪些业务行为； 各层")]),_._v(" "),v("p",[_._v("分别需要设计哪些服务或者方法； 这些方法和服务的分层以及领域类型（比如实体方法、领域服")]),_._v(" "),v("p",[_._v("务和应用服务等），它们 之间的调用和组合的依赖关系。 在严格分层架构模式下，不允许服务的")]),_._v(" "),v("p",[_._v("跨层调用，每个服务只能调用它的下一层服务。服务 从下到上依次为：实体方法、领域服务和应")]),_._v(" "),v("p",[_._v("用服务。")]),_._v(" "),v("p",[_._v("23.第8页 【高亮】")]),_._v(" "),v("p",[_._v("多个应用服务可能会对多个同样的领域服 务重复进行同样业务逻辑的组合和编排。当出现这种情")]),_._v(" "),v("p",[_._v("况时，你就需要分析是不是领域服务 可以整合了。你可以将这几个不断重复组合的领域服务，合")]),_._v(" "),v("p",[_._v("并到一个领域服务中实现。")]),_._v(" "),v("h1",{attrs:{id:"_15丨边界-微服务的各种边界在架构演进中的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_15丨边界-微服务的各种边界在架构演进中的作用"}},[_._v("#")]),_._v(" 15丨边界：微服务的各种边界在架构演进中的作用？")]),_._v(" "),v("p",[_._v("1.第1页 【高亮】")]),_._v(" "),v("p",[_._v("在用 DDD 进行微服务设计时，我们可以通过事件风暴来确定领 域模型边界，划定微服务边界，")]),_._v(" "),v("p",[_._v("定义业务和系统运行边界，从而保证微服务的单一职责和随 需而变的架构演进能力")]),_._v(" "),v("p",[_._v("2.第1页 【高亮】")]),_._v(" "),v("p",[_._v("微服务的设计要涉及到逻辑边界、物理边界和代码 边界等等。")]),_._v(" "),v("p",[_._v("3.第2页 【高亮】")]),_._v(" "),v("p",[_._v("演进式架构就是以支持增量的、非破坏的变更作为第一原则，同时支 持在应用程序结构层面的多")]),_._v(" "),v("p",[_._v("维度变化")]),_._v(" "),v("p",[_._v("4.第2页 【高亮】")]),_._v(" "),v("p",[_._v("判断微服务设计是否合理呢？其实很简单，只需要看它是否满足这样的情形就可以 了：随着业务")]),_._v(" "),v("p",[_._v("的发展或需求的变更，在不断重新拆分或者组合成新的微服务的过程中，不会 大幅增加软件开发")]),_._v(" "),v("p",[_._v("和维护的成本，并且这个架构演进的过程是非常轻松、简单的。")]),_._v(" "),v("p",[_._v("5.第2页 【高亮】")]),_._v(" "),v("p",[_._v("那如何判")]),_._v(" "),v("p",[_._v("6.第2页 【高亮】")]),_._v(" "),v("p",[_._v("这也是微服务设计的重点，就是看微服务设计是否能够支持架构长期、轻松的演进")]),_._v(" "),v("p",[_._v("7.第3页 【高亮】")]),_._v(" "),v("p",[_._v("这种单体式微服务只定义了一个维度的边界，也就是微服务之间的物理边界，本质上还是单 体架构模式。微服务设计时要考虑的不仅仅只有这一个边界，别忘了还要定义好微服务内的 逻辑边界")]),_._v(" "),v("p",[_._v("和代码边界，这样才能得到你想要的结果")]),_._v(" "),v("p",[_._v("8.第4页 【高亮】")]),_._v(" "),v("p",[_._v("根据业务及语义边界等因素将一个或者多个聚 合划定在一个限界上下文内，形成领域模型，限界")]),_._v(" "),v("p",[_._v("上下文之间的边界是第二层边界。")]),_._v(" "),v("p",[_._v("9.第4页 【高亮】")]),_._v(" "),v("p",[_._v("聚合之间是第一层边界")]),_._v(" "),v("p",[_._v("10.第4页 【高亮】")]),_._v(" "),v("p",[_._v("逻辑边界、物理边界和代码边界")]),_._v(" "),v("p",[_._v("11.第4页 【高亮】")]),_._v(" "),v("p",[_._v("逻辑边界主要定义同一业务领域或应用内紧密关联的对象所组成的不同聚类的组合之间的边 界。事")]),_._v(" "),v("p",[_._v("12.第4页 【高亮】")]),_._v(" "),v("p",[_._v("一般来说微服务会 有一个以上的聚合，在开发过程中不同聚合的代码隔离在不同的聚合代码目录中")]),_._v(" "),v("p",[_._v("13.第4页 【高亮】")]),_._v(" "),v("p",[_._v("微服务内聚合之间的边界就是逻辑边界")]),_._v(" "),v("p",[_._v("14.第4页 【高亮】")]),_._v(" "),v("p",[_._v("微服 务架构演进时，在业务端以聚合为单位进行业务能力的重组，在微服务端以聚合的代码目录")]),_._v(" "),v("p",[_._v("为单位进行微服务代码的重组。")]),_._v(" "),v("p",[_._v("15.第5页 【高亮】")]),_._v(" "),v("p",[_._v("物理边界主要从部署和运行的视角来定义微服务之间的边界。不同微服务部署位置和运行环 境是")]),_._v(" "),v("p",[_._v("相互物理隔离的，分别运行在不同的进程中16.第5页 【高亮】")]),_._v(" "),v("p",[_._v("代码边界主要用于微服务内的不同职能代码之间的隔离")]),_._v(" "),v("p",[_._v("17.第6页 【高亮】")]),_._v(" "),v("p",[_._v("微服务内聚合之间的服务调用和数据据依赖需要符合高内聚松耦合的设 计原则和开发规范，否则你")]),_._v(" "),v("p",[_._v("也不能很快完成微服务的架构演进")]),_._v(" "),v("h1",{attrs:{id:"_16丨视图-如何实现服务和数据在微服务各层的协作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_16丨视图-如何实现服务和数据在微服务各层的协作"}},[_._v("#")]),_._v(" 16丨视图：如何实现服务和数据在微服务各层的协作？")]),_._v(" "),v("p",[_._v("1.第2页 【高亮】")]),_._v(" "),v("p",[_._v("Facade 服务：位于用户接口层，包括接口和实现两部分。用于处理用户发送的 Restful 请 求和")]),_._v(" "),v("p",[_._v("解析用户输入的配置文件等，并将数据传递给应用层。或者在获取到应用层数据后，将 DO 组装")]),_._v(" "),v("p",[_._v("成 DTO，将数据传输到前端应用。 应用服务：位于应用层。用来表述应用和用户行为，负责服")]),_._v(" "),v("p",[_._v("务的组合、编排和转发，负责处 理业务用例的执行顺序以及结果拼装，对外提供粗粒度的服务。")]),_._v(" "),v("p",[_._v("2.第2页 【高亮】")]),_._v(" "),v("p",[_._v("领域服务：位于领域层。领域服务封装核心的业务逻辑，实现需要多个实体协作的核心领域 逻辑")]),_._v(" "),v("p",[_._v("。它对多个实体或方法的业务逻辑进行组合或编排，或者在严格分层架构中对实体方法 进行封装")]),_._v(" "),v("p",[_._v("，以领域服务的方式供应用层调用。")]),_._v(" "),v("p",[_._v("3.第2页 【高亮】")]),_._v(" "),v("p",[_._v("基础服务：位于基础层。提供基础资源服务（比如数据库、缓存等），实现各层的解耦，降 低外")]),_._v(" "),v("p",[_._v("部资源变化对业务应用逻辑的影响。基础服务主要为仓储服务，通过依赖倒置提供基础 资源服务")]),_._v(" "),v("p",[_._v("。领域服务和应用服务都可以调用仓储服务接口，通过仓储服务实现数据持久化")]),_._v(" "),v("p",[_._v("4.第2页 【高亮】")]),_._v(" "),v("p",[_._v("微服务的服务调用包括三类主要场景：微服务内跨层服务调用，微 服务之间服务调用和领域事件")]),_._v(" "),v("p",[_._v("驱动")]),_._v(" "),v("p",[_._v("5.第3页 【高亮】")]),_._v(" "),v("p",[_._v("第一种是应用服务调用并组装领域服务。此时领域服务会组装实体和实体方法，实现核 心领域逻")]),_._v(" "),v("p",[_._v("辑。领域服务通过仓储服务获取持久化数据对象，完成实体数据初始化。 第二种是应用服务直接")]),_._v(" "),v("p",[_._v("调用仓储服务。这种方式主要针对像缓存、文件等类型的基础层 数据访问。这类数据主要是查询")]),_._v(" "),v("p",[_._v("操作，没有太多的领域逻辑，不经过领域层，不涉及数 据库持久化对象。6.第3页 【高亮】")]),_._v(" "),v("p",[_._v("微服务之间的应用服务可以直接访问，也可以通过 API 网关访问。由于跨微服务操作，在 务 进")]),_._v(" "),v("p",[_._v("行数据新增和修改操作时，你需关注分布式事务，保证数据的一致性。 更")]),_._v(" "),v("p",[_._v("7.第3页 【高亮】")]),_._v(" "),v("p",[_._v("领域事件驱动包括微服务内和微服务之间的事件 发")]),_._v(" "),v("p",[_._v("8.第3页 【高亮】")]),_._v(" "),v("p",[_._v("。微服务内通过事件 总线（")]),_._v(" "),v("p",[_._v("EventBus）完成聚合之间的异步处理。微服务之间通过消息中间件完")]),_._v(" "),v("p",[_._v("成。异步化的 领域事件驱动机制是一种间接的服务访问方式。")]),_._v(" "),v("p",[_._v("9.第4页 【高亮】")]),_._v(" "),v("p",[_._v("基础层的服务形态主要是仓储服务。仓储服务包括接口和实现两部分。仓储接口服务供应用 层或")]),_._v(" "),v("p",[_._v("者领域层服务调用，仓储实现服务，完成领域对象的持久化或数据初始化。")]),_._v(" "),v("p",[_._v("10.第4页 【高亮】")]),_._v(" "),v("p",[_._v("领域层实现核心业务逻辑，负责表达领域模型业务概念、业务状态和业务规则。主要的服务 形态")]),_._v(" "),v("p",[_._v("有实体方法和领域服务")]),_._v(" "),v("p",[_._v("11.第4页 【高亮】")]),_._v(" "),v("p",[_._v("DDD 提倡富领域模型，尽量将业务逻辑归属到实体对象上，实在无法归属的部分则设计成 领域")]),_._v(" "),v("p",[_._v("服务")]),_._v(" "),v("p",[_._v("12.第5页 【高亮】")]),_._v(" "),v("p",[_._v("应用层用来表述应用和用户行为，负责服务的组合、编排和转发，负责处理业务用例的执行 顺序")]),_._v(" "),v("p",[_._v("以及结果的拼装，负责不同聚合之间的服务和数据协调，负责微服务之间的事件发布和 订阅。")]),_._v(" "),v("p",[_._v("13.第5页 【高亮】")]),_._v(" "),v("p",[_._v("应用层的主要服务形态有：应用服务、事件发布和订阅服务14.第5页 【高亮】")]),_._v(" "),v("p",[_._v("用户接口层是前端应用和微服务之间服务访问和数据交换的桥梁。它处理前端发送的 课微 Restf")]),_._v(" "),v("p",[_._v("ul 请求和解析用户输入的配置文件等，将数据传递给应用层 拼")]),_._v(" "),v("p",[_._v("15.第5页 【高亮】")]),_._v(" "),v("p",[_._v("分层架构有一个重要的原则就是：每层只能与位于其下 方的层发生耦合。")]),_._v(" "),v("p",[_._v("16.第5页 【高亮】")]),_._v(" "),v("p",[_._v("那根据耦合的紧密程度，分层架构可以分为两种：严格分层架构和松散分层架构。在严格分 层架")]),_._v(" "),v("p",[_._v("构中，任何层只能与位于其直接下方的层发生依赖。在松散分层架构中，任何层可以与 其任意下")]),_._v(" "),v("p",[_._v("方的层发生依赖。")]),_._v(" "),v("p",[_._v("17.第6页 【高亮】")]),_._v(" "),v("p",[_._v("但它存在一些问题，第一个是容易暴露领域层核心业务的实现逻辑；第二个是当实体方法或 领域")]),_._v(" "),v("p",[_._v("服务发生服务变更时，由于服务同时被多层服务调用和组合，不容易找出哪些上层服务 调用和组")]),_._v(" "),v("p",[_._v("合了它，不方便通知到所有的服务调用方。")]),_._v(" "),v("p",[_._v("18.第7页 【高亮】")]),_._v(" "),v("p",[_._v("在严格分层架构中，每一层服务只能向紧邻的上一层提供服务。虽 然实体、实体方法和领域服务")]),_._v(" "),v("p",[_._v("都在领域层，但实体和实体方法只能暴露给领域服务，领域服 务只能暴露给应用服务")]),_._v(" "),v("p",[_._v("19.第7页 【高亮】")]),_._v(" "),v("p",[_._v("，将实体和方法封装成领域 服务，也可以避免在应用层沉淀过多的本该属于领域层的核心业务逻")]),_._v(" "),v("p",[_._v("辑，避免应用层变得臃 肿")]),_._v(" "),v("p",[_._v("20.第7页 【高亮】")]),_._v(" "),v("p",[_._v("通过封装你可以避免将核心业务逻辑的实现暴露给外部")]),_._v(" "),v("p",[_._v("21.第7页 【高亮】")]),_._v(" "),v("p",[_._v("还有就是当服务发生变更时，由于服务只被紧邻上层的服务调用和组合，你只需要逐级 告知紧邻")]),_._v(" "),v("p",[_._v("上层就可以了，服务可管理性比松散分层架构要好是一定的")]),_._v(" "),v("h1",{attrs:{id:"_17丨从后端到前端-微服务后-前端如何设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_17丨从后端到前端-微服务后-前端如何设计"}},[_._v("#")]),_._v(" 17丨从后端到前端：微服务后，前端如何设计？")]),_._v(" "),v("p",[_._v("1.第2页 【高亮】")]),_._v(" "),v("p",[_._v("先做到前端聚合，后端解耦——这是一")]),_._v(" "),v("p",[_._v("2.第2页 【高亮】")]),_._v(" "),v("p",[_._v("同时构建多个可以独立部署、完全自治、松耦合的页面组合，其中每个组合只负 责特定业务单元")]),_._v(" "),v("p",[_._v("的 UI 元素和功能，这些页面组合就是微前端")]),_._v(" "),v("p",[_._v("3.第4页 【高亮】")]),_._v(" "),v("p",[_._v("微前端不宜与过多的微服务组合，否则容易变成单体前端")]),_._v(" "),v("p",[_._v("4.第4页 【高亮】")]),_._v(" "),v("p",[_._v("微前端通过主页面的微前 端加载器，利用页面路由和动态加载等技术，将特定业务单元的微前端")]),_._v(" "),v("p",[_._v("页面动态加载到前端 主页面，实现前端主页面与微前端页面的“拼图式”集成。")]),_._v(" "),v("h1",{attrs:{id:"_18丨知识点串讲-基于ddd的微服务设计实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_18丨知识点串讲-基于ddd的微服务设计实例"}},[_._v("#")]),_._v(" 18丨知识点串讲：基于DDD的微服务设计实例")]),_._v(" "),v("p",[_._v("1.第2页 【高亮】")]),_._v(" "),v("p",[_._v("战略设计采用的方法是事件风暴，包括：产品愿景、场景分析、领域建模和微服务拆分等几 个主")]),_._v(" "),v("p",[_._v("要过程。")]),_._v(" "),v("p",[_._v("2.第9页 【高亮】")]),_._v(" "),v("p",[_._v("事件风暴的命令是外部的一些操作和业务行为，也是微服务对外提供的能力。它往往与微服 务的")]),_._v(" "),v("p",[_._v("应用服务或者领域服务对应。我们可以将命令作为服务识别和设计的起点。具体步骤如 下： 根据")]),_._v(" "),v("p",[_._v("命令设计应用服务，确定应用服务的功能，服务集合，组合和编排方式。服务集合 中的服务包括")]),_._v(" "),v("p",[_._v("领域服务或其它微服务的应用服务。 根据应用服务功能要求设计领域服务，定义领域服务。这里")]),_._v(" "),v("p",[_._v("需要注意：应用服务可能是 由多个聚合的领域服务组合而成的。 根据领域服务的功能，确定领域")]),_._v(" "),v("p",[_._v("服务内的实体以及功能。 设计实体基本属性和方法")]),_._v(" "),v("h1",{attrs:{id:"_19丨总结-一-微服务设计和拆分要坚持哪些原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_19丨总结-一-微服务设计和拆分要坚持哪些原则"}},[_._v("#")]),_._v(" 19丨总结（一）：微服务设计和拆分要坚持哪些原则？")]),_._v(" "),v("p",[_._v("1.第1页 【高亮】")]),_._v(" "),v("p",[_._v("在从单体向微服务演进时，演进策略大体分为两种：绞杀者策略和修缮者策略")]),_._v(" "),v("p",[_._v("2.第2页 【高亮】")]),_._v(" "),v("p",[_._v("绞杀者策略类似建筑拆迁，完成部分新建筑物后，然后拆除部分旧建筑物")]),_._v(" "),v("h1",{attrs:{id:"_20丨总结-二-分布式架构关键设计10问"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_20丨总结-二-分布式架构关键设计10问"}},[_._v("#")]),_._v(" 20丨总结（二）：分布式架构关键设计10问")]),_._v(" "),v("p",[_._v("1.第6页 【高亮】")]),_._v(" "),v("p",[_._v("你可以在微服务和前端应用之间，增加一层 BFF 微服务（Backend for Frontends）。BFF 主要")]),_._v(" "),v("p",[_._v("职责是处理微服务之间的服务组合和编排")]),_._v(" "),v("p",[_._v("2.第6页 【高亮】")]),_._v(" "),v("p",[_._v("对于实时性要求高的强一致性业务场景，你可以采用分布式事务，但分布式事务有性能代 价，在")]),_._v(" "),v("p",[_._v("设计时我们需平衡考虑业务拆分、数据一致性、性能和实现的复杂度，尽量避免分布 式事务的产")]),_._v(" "),v("p",[_._v("生。")])])}),[],!1,null,null,null);v.default=a.exports}}]);