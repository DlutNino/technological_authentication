import Vue from "vue";
import VueRouter from "vue-router";
import BodyView from "@/components/BodyView";
import TextContent from "@/components/TextContent";
import Display from "@/components/Display";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/team_introduction/survey',
    },
    {
        path: '/team_introduction',
        component: BodyView,
        props: {
            menu_items: [
                {index: 1, title: '队伍概况', dest: '/team_introduction/survey'},
                {index: 2, title: '自我介绍', dest: '/team_introduction/brief'},
                {index: 3, title: '技术总结', dest: '/team_introduction/technicals'},
            ]
        },
        children: [
            {
                path: 'survey',
                component: TextContent,
                props: {
                    title: '队伍概况',
                    content: [
                        '队伍名称： OurEDA',
                        '指导教师： 朱明，高级工程师',
                        '队员： 郑许溢 方陶松 何彩英 曹存曦',
                        '学校： 大连理工大学',
                    ],
                },
            },
            {
                path: 'brief',
                component: TextContent,
                props: {
                    title: '自我介绍',
                    content: [
                        '何彩英：我是大连理工大学软件学院的何彩英。是这次中国机器人大赛-3D视觉赛OurEDA队的队员。我曾参加过全国大学生程序设计竞赛东北赛区的C++语言比赛，并取得比较优异的成绩；能较好地掌握java，python，C++等程序设计语，开发过日记本安卓APP、以及模仿过学校官网等页面开发网站。现手中有一个基于Android的建筑式分布系统项目，和数据库做题网站项目。我不仅热爱编程，课余活动也毫不单调。我曾担任校新媒体干事，负责撰写学校公众号的推文；参加过志愿活动，在“建设美丽大连，创建文明城市”环保活动中获得荣誉证书。我所学的专业较偏向于人工智能，这次是我首次参加机器人比赛，也是我首次将所学的专业知识付诸实践的第一个比赛。',
                        '方陶松：我是大连理工大学软件学院的方陶松。是这次中国机器人大赛-3D视觉赛OurEDA队的队员。我热爱机器人和计算机视觉，喜欢探索认知的边界，大学以来，已经获得包括国际基因工程机器大赛金奖在内的国家级、省市级，校级科技竞赛奖项数十项。希望可以在这次的先进视觉比赛中取得更好的成绩。',
                        '郑许溢：我是大连理工大学国际信息与软件学院的郑许溢，是这次中国机器人大赛-3D视觉赛OurEDA队的队员。我对网站前端搭建有所研究，能较好地运用C++、JavaScript等程序设计语言，正在进行一个具有实时接入能力的水下机器人数据共享平台的项目。我所学的专业是数字媒体技术，大一大二两年均分88.65，计算机组成与原理、操作系统、计算机网络和软件工程等专业必修课都拿到了90以上的分数。在大连理工大学和阿里云联合举办的“阿里云数据工程训练营”中，作为队长带领团队获得了该训练营的团队一等奖。我不仅热爱编程，课外还学习了日语，已经取得了JLPT国际日本语能力测试N2证书。这是我首次参加中国机器人大赛，希望能在这次的比赛中取得好成绩。',
                        '曹存曦：我是大连理工大学软件学院的曹存曦。是这次中国机器人大赛-3D视觉赛OurEDA队的队员。我对人工智能、机器学习领域有强烈的兴趣，进行过许多自主学习和探索。我曾荣获2020年全国水下机器人大赛三等奖，拥有国家级大学生创新创业训练计划项目证书和传输通信领域的发明专利证书，以及在高校计算机能力挑战赛等比赛中获奖。我希望在这次先进视觉赛中，我们的团队能够取得满意的成绩。',
                    ],
                },
            },
            {
                path: 'technicals',
                component: TextContent,
                props: {
                    title: '技术总结',
                    content: [
                        '本团队的3D目标识别解决方案基于当前热门的目标识别模型YOLO改进而成，图像采集设备是Intel的realsense sr300摄像机。',
                        '该模型搭载在硬件设备jetson nano上，部署在操作系统Ubuntu 20.04中，在硬件环境和操作系统内核版本相同时,能够完整复现。',
                        '我们使用pyqt开发了可视化界面，用户在部署realsense的SDK上可以立刻开始使用摄像机进行识别，并且识别结果将存储到文本文件中。',
                    ],
                },
            }
        ]
    },
    {
        path: '/function_display',
        component: Display,
    },
    {
        path: '/system_introduction',
        component: BodyView,
        props: {
            menu_items: [
                {index: 1, title: '软硬件需求', dest: '/system_introduction/software'},
                {index: 2, title: '环境配置', dest: '/system_introduction/hardware'},
                {index: 3, title: '算法细节：YOLO模块', dest: '/system_introduction/complement'},
                {index: 4, title: '算法细节：点云处理模块', dest: '/system_introduction/point_cloud'},
                {index: 5, title: '可视化界面', dest: '/system_introduction/gui'},
            ]
        },
        children: [
            {
                path: 'software',
                component: TextContent,
                props: {
                    title: '软硬件需求',
                    content: [
                        '本团队的3D目标识别解决方案基于当前热门的目标识别模型YOLO改进而成，图像采集设备是Intel的realsense sr300摄像机。',
                        '该模型搭载在硬件设备jetson nano上，部署在操作系统Ubuntu 20.04中，在硬件环境和操作系统内核版本相同时,能够完整复现。',
                        '以下是我们的计算平台和实验环境：',
                    ],
                    imgs: [
                        {src: require('../assets/hard1.jpg')},
                        {src: require('../assets/hard2.jpg')},
                        {src: require('../assets/hard3.jpg')},
                    ]
                },
            },
            {
                path: 'hardware',
                component: TextContent,
                props: {
                    title: '环境配置',
                    content: [
                        '本模型基于Python语言开发。',
                        '图1 YOLO模块',
                        '图2 点云模块(不包括上文已经出现的包)',
                        '图3 软件模块',
                    ],
                    imgs: [
                        {src: require('../assets/config1.png')},
                        {src: require('../assets/config2.png')},
                        {src: require('../assets/config3.png')},
                    ]
                },
            },
            {
                path: 'complement',
                component: TextContent,
                props: {
                    title: '算法细节：YOLO模块',
                    content: [
                        '卷积神经网络的结构：' +
                        'Yolo采用卷积网络来提取特征，然后使用全连接层来得到预测值。网络结构参考GooLeNet模型，包含24个卷积层和2个全连接层，如图8所示。对于卷积层，主要使用1x1卷积来做channle reduction，然后紧跟3x3卷积。对于卷积层和全连接层，采用Leaky ReLU激活函数：max(x, 0.1x)。最后一层采用线性激活函数。\n',
                        '图1为YOLO的卷积神经网络的结构*([1506.02640] You Only Look Once: Unified, Real-Time Object D etection (arxiv.org))',
                        '可以看到网络的最后输出为7*7*30大小的张量。这和前面的讨论是一致的。对于每一个单元格，前20个元素是类别概率值，然后2个元素是边界框置信度，两者相乘可以得到类别置信度，最后8个元素是边界框的(x,y,w,h)。大家可能会感到奇怪，对于边界框为什么把置信度c和(x,y,w,h)都分开排列，而不是按照(x,y,w,h,c)这样排列，\n' +
                        '其实纯粹是为了计算方便，因为实际上这30个元素都是对应一个单元格，其排列是可以任意的。但是分离排布，可以方便地提取每一个部分。这里来解释一下，首先网络的预测值是一个二维张量P，其shape为[batch, 7*7*30]。采用切片，那么\t就是类别概率部分，而\n' +
                        '是置信度部分，最后剩余部分\t是边界框的预测结果。这样，提取每个部分是非常方便的，这会方面后面的训练及预测时的计算。\n',
                        '网络训练：' +
                        '在训练之前，先在ImageNet上进行了预训练，其预训练的分类模型采用图8中前20个卷积层，然后添加一个average-pool层和全连接层。预训练之后，在预训练得到的20层卷积层之上加上随机初始化的4个卷积层和2个全连接层。由于检测任务一般需要更高清的图片，所以将网络的输入从224x224增加到了448x448',
                        '整个网络的流程如图2所示。',
                        '下面是训练损失函数的分析，Yolo算法将目标检测看成回归问题，所以采用的是均方差损失函数。但是对不同的部分采用了不同的权重值。首先区分定位误差和分类误差。对于定位误差，即边界框坐标预测误差，采用较大的权重5。然后其区分不包含目标的边界框与含有目标的边界框的置信\n' +
                        '度，对于前者，采用较小的权重值0.5。其它权重值均设为1。然后采用均方误差，其同等对待大小不同的边界框，但是实际上较小的边界框的坐标误差应该要比较大的边界框要更敏感。为了\n' +
                        '保证这一点，将网络的边界框的宽与高预测改为对其平方根的预测，即预测值变为(x,y,w^1/2,h^1/2)。\n',
                        '另外一点时，由于每个单元格预测多个边界框。但是其对应类别只有一个。那么在训练时，如果该单元格内确实存在目标，那么只选择与ground truth的IOU最大的那个边界框来负责预测该目标，而其它边界框认为不存在目标。这样设置的一个结果将会使一个单元格对应的边界框更加专业化，其可以分别适用不同大小，不同高宽比的目标，从而提升模型性能。大家可能会想如果一个单元格内存在多个目标怎么办，其实这时候Yolo算法就只能选择其中一个来训练，这也是Yolo算法的缺点之一。要注意的一点时，对于不存在对应目标的边界框，其误差项就是只有置信度，坐标项误差是没法计算的。而只有当一 个单元格内确实存在目标时，才计算分类误差项，否则该项无法计算。',
                        '综上讨论，最终的损失函数计算如图3。',
                        '网络预测：' +
                        '在说明Yolo算法的预测过程之前，这里先介绍一下非极大值抑制算法（non maximum suppression, NMS），这个算法不单单是针对Yolo算法的，而是所有的检测算法中都会用到。NMS算法主要解决的是一个目标被多次检测的问题，如图11中人脸检测，可以看到人脸被多次检测，但是其实我们希望最后仅仅输出其中一个最好的预测框，比如对于美女，只想要红色那个检测结果。那么可以采用NMS算法来实现这样的效果：首先从所有的检测框中找到置信度最大的那个框，然后挨个计算其与剩余框的IOU，如果其值大于一定阈值（重合度过高），那么就将该框剔除；然后对剩余的检测框重复上述过程，直到处理完所有的检测框。Yolo预测过程也需要用到NMS算法。\n',
                        '算法性能分析：' +
                        '如图4是Yolo算法在PASCAL VOC 2007数据集上的性能，这里Yolo与其它检测算法做了对比，包括DPM，R-CNN，Fast R-CNN以及Faster R-CNN。其对比结果如表1所示。与实时性检测方法DPM对比，可以看到Yolo算法可以在较高的mAP上达到较快的检测速度，其中Fast Yolo算法比快速DPM还快，而且mAP是远高于DPM。但是相比Faster R-CNN，Yolo的mAP稍低，但是速度更快。所以Yolo算法算是在速度与准确度上做了折中。\n',
                    ],
                    imgs: [
                        {src: require('../assets/yolo1.jpg')},
                        {src: require('../assets/yolo2.jpg')},
                        {src: require('../assets/yolo3.jpg')},
                        {src: require('../assets/yolo4.jpg')},
                    ]
                },
            },
            {
                path: 'point_cloud',
                component: TextContent,
                props: {
                    title: '算法细节：点云处理模块',
                    content: [
                        '图1 深度相机采集图像',
                        '图2 生成点云',
                    ],
                    imgs: [
                        {src: require('../assets/point_cloud1.png')},
                        {src: require('../assets/point_cloud2.png')},
                    ]
                },
            },
            {
                path: 'gui',
                component: TextContent,
                props: {
                    title: '可视化界面',
                    content: [
                        '以下是我们使用pyqt开发的可视化界面，用户在部署realsense的SDK上可以立刻开始使用摄像机进行识别，并且识别结果将存储到文本文件中。',
                        '如图2所示为程序的运行结果。可以看到，在圆盘转动的周期中，所有物品均可以被识别，而且置信度较高。',
                    ],
                    imgs: [
                        {src: require('../assets/bashpy.png')},
                        {src: require('../assets/gui.jpg')},
                    ]
                },
            }
        ]
    },
]

const router = new VueRouter({
    routes,
    mode: "history",
})

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
    return routerPush.call(this, location).catch(error => error)
}

export default router;