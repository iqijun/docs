(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{290:function(_,v,a){"use strict";a.r(v);var t=a(10),s=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("blockquote",[v("p",[_._v("作者： 欧创新  PICC架构师")])]),_._v(" "),v("h1",{attrs:{id:"开篇词-学好ddd-你能做什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开篇词-学好ddd-你能做什么"}},[_._v("#")]),_._v(" 开篇词 学好DDD，你能做什么")]),_._v(" "),v("h2",{attrs:{id:"课程设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#课程设计"}},[_._v("#")]),_._v(" 课程设计")]),_._v(" "),v("h3",{attrs:{id:"课程目标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#课程目标"}},[_._v("#")]),_._v(" 课程目标")]),_._v(" "),v("ol",[v("li",[_._v("用浅显易懂的案例带你了解 DDD 必知必会的 10 大核心概念，深入设计思想，厘清各知识域之间的关系；")]),_._v(" "),v("li",[_._v("用 DDD 分层架构带你弄懂微服务架构各层之间的关系，并完成微服务分层和代码模型设计；")]),_._v(" "),v("li",[_._v("用 DDD 战略设计和事件风暴带你完成领域建模和企业级中台业务建模；")]),_._v(" "),v("li",[_._v("用一个典型的案例带你完整走一遍 DDD 战略设计和战术设计的全流程，学习 DDD 在领域模型和微服务设计过程中的技术要点；")])]),_._v(" "),v("h3",{attrs:{id:"课程内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#课程内容"}},[_._v("#")]),_._v(" 课程内容")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("基础篇 主要讲解 DDD 的核心知识体系，具体包括：领域、子域、核心域、通用域、支撑域、限界上下文、实体、值对象、聚合和聚合根等概念\n![[附件/Pasted image 20230312161528.png]]")])]),_._v(" "),v("li",[v("p",[_._v("进阶篇主要讲解领域事件、DDD 分层架构、几种常见的微服务架构模型以及中台设计思想等内容。具体包括：")]),_._v(" "),v("ol",[v("li",[_._v("如何通过领域事件实现微服务解耦？")]),_._v(" "),v("li",[_._v("怎样进行微服务分层设计？")]),_._v(" "),v("li",[_._v("如何实现层与层之间的服务协作？")]),_._v(" "),v("li",[_._v("通过几种微服务架构模型的对比分析，让你了解领域模型和微服务分层的作用和价值。")]),_._v(" "),v("li",[_._v("另外，还会介绍中台设计的核心思想，和你探讨如何实现前中后台的协同和融合？如何利用 DDD 进行中台设计？")])])]),_._v(" "),v("li",[v("p",[_._v("实战篇是我们专栏课程的重点，我准备了多个实战小项目。")]),_._v(" "),v("ol",[v("li",[_._v("中台和领域建模的实战：带你了解如何用 DDD 设计思想构建企业级可复用的中台业务模型，了解事件风暴以及用事件风暴构建领域模型的过程。")]),_._v(" "),v("li",[_._v("微服务设计实战：带你了解如何用 DDD 设计微服务代码模型，如何从领域模型完成微服务设计，建立领域模型与微服务代码模型的映射关系，如何完成微服务的架构演进等")])])])]),_._v(" "),v("h1",{attrs:{id:"_01丨领域驱动设计-微服务设计为什么要选择ddd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_01丨领域驱动设计-微服务设计为什么要选择ddd"}},[_._v("#")]),_._v(" 01丨领域驱动设计：微服务设计为什么要选择DDD？")]),_._v(" "),v("h2",{attrs:{id:"软件架构模式的演进"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#软件架构模式的演进"}},[_._v("#")]),_._v(" 软件架构模式的演进")]),_._v(" "),v("p",[_._v("软件架构模式大体来说经历了从单机、集中式到分布式微服务架构三个阶段的演进\n![[附件/Pasted image 20230312163624.png]]")]),_._v(" "),v("p",[v("strong",[_._v("第一阶段是单机架构：")]),_._v(" 采用面向过程的设计方法，系统包括客户端 UI 层和数据库两层，采用 C/S 架构模式，整个系统围绕数据库驱动设计和开发，并且总是从设计数据库和字段开始。")]),_._v(" "),v("p",[v("strong",[_._v("第二阶段是集中式架构：")]),_._v(" 采用面向对象的设计方法，系统包括业务接入层、业务逻辑层和数据库层，采用经典的三层架构，也有部分应用采用传统的 SOA 架构。这种架构容易使系统变得臃肿，可扩展性和弹性伸缩性差。")]),_._v(" "),v("p",[v("strong",[_._v("第三阶段是分布式微服务架构：")]),_._v(" 随着微服务架构理念的提出，集中式架构正向分布式微服务架构演进。微服务架构可以很好地实现应用之间的解耦，解决单体应用扩展性和弹性伸缩能力不足的问题")]),_._v(" "),v("p",[v("strong",[_._v("缺点：")]),_._v(" 在单机和集中式架构这两种模式下，软件无法快速响应需求和业务的迅速变化，最终错 失发展良机")]),_._v(" "),v("h2",{attrs:{id:"微服务设计和拆分的困境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务设计和拆分的困境"}},[_._v("#")]),_._v(" 微服务设计和拆分的困境")]),_._v(" "),v("p",[_._v("微服务拆分困境产生的根本原因就是不知道业务或者微服务的边界到底在什么地方，确定了业务边界和应用边界，这个问题就会迎刃而解")]),_._v(" "),v("p",[v("strong",[_._v("DDD 核心思想是通过领域驱动设计方法定义领域模型，从而确定业务和应用边界，保证业务模型与代码模型的一致性。")])]),_._v(" "),v("h2",{attrs:{id:"为什么ddd适合微服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么ddd适合微服务"}},[_._v("#")]),_._v(" 为什么DDD适合微服务")]),_._v(" "),v("p",[_._v("DDD 不是架构，而是一种架构设计方法论，它通过边界划分将复杂业务领域简单化，帮我们设计出清 晰的领域和应用边界，可以很容易地实现架构演进。")]),_._v(" "),v("h2",{attrs:{id:"ddd-包括战略设计和战术设计两部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ddd-包括战略设计和战术设计两部分"}},[_._v("#")]),_._v(" DDD 包括战略设计和战术设计两部分")]),_._v(" "),v("p",[v("strong",[_._v("战略设计")]),_._v(" 主要从业务视角出发，建立业务领域模型，划分领域边界，建立通用语言的限界上 下文，限界上下文可以作为微服务设计的参考边界。")]),_._v(" "),v("p",[v("strong",[_._v("战术设计")]),_._v("则从技术视角出发，侧重于领域模型的技术实现，完成软件开发和落地，包括：聚合根、实体、值对象、领域服务、应用服务和资源库等代码逻辑的设计和实现。")]),_._v(" "),v("h3",{attrs:{id:"如何进行战略设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何进行战略设计"}},[_._v("#")]),_._v(" 如何进行战略设计")]),_._v(" "),v("p",[_._v("DDD的战略设计会建立领域模型，领域模型会用于指导微服务的设计与拆分。"),v("strong",[_._v("事件风暴")]),_._v("是 建立领域模型的主要方法，它是一个从发散到收敛的过程。它通常采用用例分析、场景分析和用户旅程分析，尽可能全面不遗漏地分解业务领域，并梳理领域对象之间的关系，这是一 个发散的过程。事件风暴过程会产生很多的实体、命令、事件等领域对象，我们将这些领域 对象从不同的维度进行聚类，形成如聚合、限界上下文等边界，建立领域模型，这就是一个 收敛的过程")]),_._v(" "),v("h3",{attrs:{id:"划定领域模型和微服务的边界"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#划定领域模型和微服务的边界"}},[_._v("#")]),_._v(" 划定领域模型和微服务的边界")]),_._v(" "),v("p",[_._v("第一步：在事件风暴中梳理业务过程中的用户操作、事件以及外部依赖关系等，根据这些要素梳理出领域实体等领域对象。")]),_._v(" "),v("p",[_._v("第二步：根据领域实体之间的业务关联性，将业务紧密相关的实体进行组合形成聚合，同时确定聚合中的聚合根、值对象和实体。在这个图里，聚合之间的边界是第一层边界，它们在同一个微服务实例中运行，这个边界是逻辑边界，所以用虚线表示")]),_._v(" "),v("p",[_._v("第三步：根据业务及语义边界等因素，将一个或者多个聚合划定在一个限界上下文内，形成领域模型。在这个图里，限界上下文之间的边界是第二层边界，这一层边界可能就是未来微 服务的边界，不同限界上下文内的领域逻辑被隔离在不同的微服务实例中运行，物理上相互 隔离，所以是物理边界，边界之间用实线来表示。")]),_._v(" "),v("p",[_._v("![[附件/Pasted image 20230313224739.png]]")]),_._v(" "),v("h2",{attrs:{id:"ddd与微服务的关联"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ddd与微服务的关联"}},[_._v("#")]),_._v(" DDD与微服务的关联")]),_._v(" "),v("p",[_._v("DDD 主要关注：从业务领域视角划分领域边界，构建通用语言进行高效沟通，通过业务抽象，建立领域模型，维持业务和代码的逻辑一致性。")]),_._v(" "),v("p",[_._v("微服务主要关注：运行时的进程间通信、容错和故障隔离，实现去中心化数据管理和去中心 化服务治理，关注微服务的独立开发、测试、构建和部署。")]),_._v(" "),v("h2",{attrs:{id:"总结-ddd-可以给你带来以下收获"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结-ddd-可以给你带来以下收获"}},[_._v("#")]),_._v(" 总结 DDD 可以给你带来以下收获：")]),_._v(" "),v("ol",[v("li",[_._v("DDD 是一套完整而系统的设计方法，它能带给你从战略设计到战术设计的标准设计过程，使得你的设计思路能够更加清晰，设计过程更加规范。")]),_._v(" "),v("li",[_._v("DDD 善于处理与领域相关的拥有高复杂度业务的产品开发，通过它可以建立一个核心而稳定的领域模型，有利于领域知识的传递与传承。")]),_._v(" "),v("li",[_._v("DDD 强调团队与领域专家的合作，能够帮助你的团队建立一个沟通良好的氛围，构建一致的架构体系。")]),_._v(" "),v("li",[_._v("DDD 的设计思想、原则与模式有助于提高你的架构设计能力。")]),_._v(" "),v("li",[_._v("无论是在新项目中设计微服务，还是将系统从单体架构演进到微服务，都可以遵循\nDDD 的架构原则。")]),_._v(" "),v("li",[_._v("DDD 不仅适用于微服务，也适用于传统的单体应用。")])]),_._v(" "),v("h1",{attrs:{id:"_02丨领域、子域、核心域、通用域和支撑域-傻傻分不清"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_02丨领域、子域、核心域、通用域和支撑域-傻傻分不清"}},[_._v("#")]),_._v(" 02丨领域、子域、核心域、通用域和支撑域：傻傻分不清？")]),_._v(" "),v("h2",{attrs:{id:"如何理解领域和子域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何理解领域和子域"}},[_._v("#")]),_._v(" 如何理解领域和子域")]),_._v(" "),v("ol",[v("li",[_._v("百度百科对领域的解释：“领域具体指一种特定的范围或区域。”")]),_._v(" "),v("li",[_._v("领域就是用来确定范围的，范围即边界，")]),_._v(" "),v("li",[_._v("领域可以进一步划分为子领域。我们把划分出来的多个子领域称为子域，每个子域对应一个更小的问题域或者更小的业务范围")])]),_._v(" "),v("h2",{attrs:{id:"如何理解核心域-通用域和支撑域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何理解核心域-通用域和支撑域"}},[_._v("#")]),_._v(" 如何理解核心域，通用域和支撑域")]),_._v(" "),v("p",[_._v("子域可以根据自身重要性和功能属性划分为三类子域，它们分别是：核心域、通用域和支撑域。")]),_._v(" "),v("p",[_._v("决定产品和公司核心竞争力的子域是"),v("strong",[_._v("核心域")]),_._v("\n没有太多个性化的诉求，同时被多个子域使用的通用功能子域是"),v("strong",[_._v("通用域")]),_._v("\n既不包含决定产品和公司核心竞争力的功能，也不包含通用功能的子域， 它就是"),v("strong",[_._v("支撑域")]),_._v("\n通用域是用到的通用系统，如权限，认证，它没有企业特点限制。支撑域是指哪些有企业特性，但不具有通用性，例如数据字典")]),_._v(" "),v("h2",{attrs:{id:"为什么要区分核心域-通用域和支撑域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要区分核心域-通用域和支撑域"}},[_._v("#")]),_._v(" 为什么要区分核心域，通用域和支撑域")]),_._v(" "),v("p",[_._v("在预算和资源有限的情况下不同类型的子域投入的关注度和资源是不同的，好钢用在刀刃上")]),_._v(" "),v("p",[_._v("商业模式，公司主营业务的不同会导致核心域的划分结果不同")]),_._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("p",[_._v("领域的核心思想就是将问题域逐级细分，来降低月舞理解和系统实现的复杂度。通过领域细分，逐步缩小微服务需要解决的问题域，构建合适的领域模型。")]),_._v(" "),v("h1",{attrs:{id:"_03丨限界上下文-定义领域边界的利器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_03丨限界上下文-定义领域边界的利器"}},[_._v("#")]),_._v(" 03丨限界上下文：定义领域边界的利器")]),_._v(" "),v("h2",{attrs:{id:"通用语言和限界上下文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通用语言和限界上下文"}},[_._v("#")]),_._v(" 通用语言和限界上下文")]),_._v(" "),v("blockquote",[v("blockquote",[v("p",[_._v("通用语言定义上下文的含义，界限上下文定义领域的边界")])])]),_._v(" "),v("p",[_._v("通用语言包含术语和用例场景，并且能够直接反映在代码中。通用语言中的名词可以给领域 对象")]),_._v(" "),v("p",[_._v("命名，如商品、订单等，对应实体对象；而动词则表示一个动作或事件，如商品已下 单、订单已")]),_._v(" "),v("p",[_._v("付款等，对应领域事件或者命令。")]),_._v(" "),v("p",[_._v("2.第4页 【高亮】")]),_._v(" "),v("p",[_._v("DDD 在战略设计上提出了“限界上下文”这个 概念，用来确定语义所在的领域边界。")]),_._v(" "),v("p",[_._v("3.第4页 【高亮】")]),_._v(" "),v("p",[_._v("我们可以将限界上下文拆解为两个词：限界和上下文。限界就是领域的边界，而上下文则是 语义")]),_._v(" "),v("p",[_._v("环境")]),_._v(" "),v("h1",{attrs:{id:"_04丨实体和值对象-从领域模型的基础单元看系统设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_04丨实体和值对象-从领域模型的基础单元看系统设计"}},[_._v("#")]),_._v(" 04丨实体和值对象：从领域模型的基础单元看系统设计")]),_._v(" "),v("p",[_._v("1.第2页 【高亮】")]),_._v(" "),v("p",[_._v("在 DDD 中有这样一类对象，它们拥有唯一标识符，且标识符在历经各种状态变更后仍能保 持一")]),_._v(" "),v("p",[_._v("致。对这些对象而言，重要的不是其属性，而是其延续性和标识，对象的延续性和标识 会跨越甚")]),_._v(" "),v("p",[_._v("至超出软件的生命周期")]),_._v(" "),v("p",[_._v("2.第2页 【高亮】")]),_._v(" "),v("p",[_._v("实 体和值对象是组成领域模型的基础单元。")]),_._v(" "),v("p",[_._v("3.第2页 【高亮】")]),_._v(" "),v("p",[_._v("跨多个实体的领域逻辑则在领域服务中实现")]),_._v(" "),v("p",[_._v("4.第2页 【高亮】")]),_._v(" "),v("p",[_._v("在领域模型映射到数据模型时，一个实体可能对应 0 个、1 个或者多个数据库持久化对 象。")]),_._v(" "),v("h1",{attrs:{id:"_05丨聚合和聚合根-怎样设计聚合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_05丨聚合和聚合根-怎样设计聚合"}},[_._v("#")]),_._v(" 05丨聚合和聚合根：怎样设计聚合？")]),_._v(" "),v("p",[_._v("1.第2页 【高亮】")]),_._v(" "),v("p",[_._v("领域模型内的实体和值对象就好比个体，而能让实体和值对象协同工作的组织就是聚合，它 用来")]),_._v(" "),v("p",[_._v("确保这些领域对象在实现共同的业务逻辑时，能保证数据的一致性。")]),_._v(" "),v("p",[_._v("2.第2页 【高亮】")]),_._v(" "),v("p",[_._v("聚合在 DDD 分层架构里属于领域层，领域层包含了多个聚合，共同实现核心业务逻辑。聚 合内")]),_._v(" "),v("p",[_._v("实体以充血模型实现个体业务能力，以及业务逻辑的高内聚。跨多个实体的业务逻辑通 过领域服")]),_._v(" "),v("p",[_._v("务来实现，跨多个聚合的业务逻辑通过应用服务来实现。")]),_._v(" "),v("p",[_._v("3.第2页 【高亮】")]),_._v(" "),v("p",[_._v("聚合根的主要目的是为了避免由于复杂数据模型缺少统一的业务规则控制，而导致聚合、实 体之")]),_._v(" "),v("p",[_._v("间数据不一致性的问题。")]),_._v(" "),v("p",[_._v("4.第3页 【高亮】")]),_._v(" "),v("p",[_._v("如果把聚合比作组织，那聚合根就是这个组织的负责人。聚合根也称为根实体，它不仅是实 体，")]),_._v(" "),v("p",[_._v("还是聚合的管理者。")]),_._v(" "),v("p",[_._v("5.第4页 【高亮】")]),_._v(" "),v("p",[_._v("第 1 步：采用事件风暴，根据业务行为，梳理出在投保过程中发生这些行为的所有的实体 和值对")]),_._v(" "),v("p",[_._v("象，比如投保单、标的、客户、被保人等等。 第 2 步：从众多实体中选出适合作为对象管理者的")]),_._v(" "),v("p",[_._v("根实体，也就是聚合根。判断一个实体 是否是聚合根，你可以结合以下场景分析：是否有独立的")]),_._v(" "),v("p",[_._v("生命周期？是否有全局唯一 ID？ 是否可以创建或修改其它对象？是否有专门的模块来管这个实体")]),_._v(" "),v("p",[_._v("。图中的聚合根分别是投保 单和客户实体。 第 3 步：根据业务单一职责和高内聚原则，找出与")]),_._v(" "),v("p",[_._v("聚合根关联的所有紧密依赖的实体和值 对象。构建出 1 个包含聚合根（唯一）、多个实体和值对")]),_._v(" "),v("p",[_._v("象的对象集合，这个集合就是聚 合。在图中我们构建了客户和投保这两个聚合。 第 4 步：在聚")]),_._v(" "),v("p",[_._v("合内根据聚合根、实体和值对象的依赖关系，画出对象的引用和依赖模型。 这里我需要说明一下")]),_._v(" "),v("p",[_._v("：投保人和被保人的数据，是通过关联客户 ID 从客户聚合中获取的， 在投保聚合里它们是投保单的值对象，这些值对象的数据是客户的冗余数据，即使未来客户 聚合的数据发生了变更，也不")]),_._v(" "),v("p",[_._v("会影响投保单的值对象数据。从图中我们还可以看出实体之间 的引用关系，比如在投保聚合里投")]),_._v(" "),v("p",[_._v("保单聚合根引用了报价单实体，报价单实体则引用了报价 规则子实体。 第 5 步：多个聚合根据")]),_._v(" "),v("p",[_._v("业务语义和上下文一起划分到同一个限界上下文内。 这就是一个聚合诞生的完整过程了。")]),_._v(" "),v("p",[_._v("6.第4页 【高亮】")]),_._v(" "),v("p",[_._v("从众多实体中选出适合作为对象管理者的根实体，也就是聚合根。判断一个实体 是否是聚合根，")]),_._v(" "),v("p",[_._v("你可以结合以下场景分析：是否有独立的生命周期？是否有全局唯一 ID？ 是否可以创建或修改其")]),_._v(" "),v("p",[_._v("它对象？是否有专门的模块来管这个实体")]),_._v(" "),v("p",[_._v("7.第4页 【高亮】")]),_._v(" "),v("ol",[v("li",[_._v("在一致性边界内建模真正的不变条件。聚合用来封装真正的不变性，而不是简单地将对 象组合")])]),_._v(" "),v("p",[_._v("在一起。聚合内有一套不变的业务规则，各实体和值对象按照统一的业务规则运行， 实现对象数")]),_._v(" "),v("p",[_._v("据的一致性，边界之外的任何东西都与该聚合无关，这就是聚合能实现业务高内 聚的原因。 2. 设")]),_._v(" "),v("p",[_._v("计小聚合。如果聚合设计得过大，聚合会因为包含过多的实体，导致实体之间的管理 过于复杂，")]),_._v(" "),v("p",[_._v("高频操作时会出现并发冲突或者数据库锁，最终导致系统可用性变差。而小聚合")]),_._v(" "),v("p",[_._v("8.第5页 【高亮】")]),_._v(" "),v("p",[_._v("设计则可以降低由于业务过大导致聚合重构的可能性，让领域模型更能适应业务的变化。 3. 通过")]),_._v(" "),v("p",[_._v("唯一标识引用其它聚合。聚合之间是通过关联外部聚合根 ID 的方式引用，而不是直 接对象引用")]),_._v(" "),v("p",[_._v("的方式。外部聚合的对象放在聚合边界内管理，容易导致聚合的边界不清晰，也 会增加聚合之间")]),_._v(" "),v("p",[_._v("的耦合度。 4. 在边界之外使用最终一致性。聚合内数据强一致性，而聚合之间数据最终一致性。")]),_._v(" "),v("p",[_._v("在一 次事务中，最多只能更改一个聚合的状态。如果一次业务操作涉及多个聚合状态的更改，应")]),_._v(" "),v("p",[_._v("采用领域事件的方式异步修改相关的聚合，实现聚合之间的解耦（相关内容我会在领域事件 部分")]),_._v(" "),v("p",[_._v("详解）。 5. 通过应用层实现跨聚合的服务调用。为实现微服务内聚合之间的解耦，以及未来以聚")]),_._v(" "),v("p",[_._v("合 为单位的微服务组合和拆分，应避免跨聚合的领域服务调用和跨聚合的数据库表关联。")]),_._v(" "),v("h1",{attrs:{id:"_06丨领域事件-解耦微服务的关键"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_06丨领域事件-解耦微服务的关键"}},[_._v("#")]),_._v(" 06丨领域事件：解耦微服务的关键")]),_._v(" "),v("p",[_._v("1.第2页 【高亮】")]),_._v(" "),v("p",[_._v("一次事务最多只能更改一个聚合的状态。如果一次业务操作涉及多个聚合状态的更改， 应采用领")]),_._v(" "),v("p",[_._v("域事件的最终一致性。")]),_._v(" "),v("p",[_._v("2.第3页 【高亮】")]),_._v(" "),v("p",[_._v("分布式事务机制 会影响系统性能，增加微服务之间的耦合，所以我们还是要尽量避免使用分布式")]),_._v(" "),v("p",[_._v("事务。")]),_._v(" "),v("p",[_._v("3.第7页 【高亮】")]),_._v(" "),v("p",[_._v("事件分发流程大致如下： 如果是微服务内的订阅者（其它聚合），则直接分发到指定订阅者； 如")]),_._v(" "),v("p",[_._v("果是微服务外的订阅者，将事件数据保存到事件库（表）并异步发送到消息中间件； 如果同时存")]),_._v(" "),v("p",[_._v("在微服务内和外订阅者，则先分发到内部订阅者，将事件消息保存到事件库 （表），再异步发送")]),_._v(" "),v("p",[_._v("到消息中间件")])])}),[],!1,null,null,null);v.default=s.exports}}]);