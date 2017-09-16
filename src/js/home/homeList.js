define(['text!template/home/homeListTpl.html', './infoCenter/browseInfo/browseInfo', './infoCenter/distributeInfo/distributeInfo', './infoCenter/GMInfo/GMInfo', './email/sendEmail', './email/getMail/getMail', './email/drafts/drafts',
    './email/sentMail/sentMail', './personDoc/GMDoc', './personDoc/browseDoc', './dptDoc/browseDocDpt', './dptDoc/GMDocDpt', './knowledgeGM/browseDocKnowledge', './knowledgeGM/addDocKonwledge', './knowledgeGM/GMDocKonwledge', './workSheet/builtSheet', './workSheet/todoSheet',
    './workSheet/runSheet', './dayCoop/dayOrder', './dayCoop/cahier',
    './personGM/employeeForum',
    './transaction/newTransaction', './transaction/establishedTransaction', './transaction/todoTransaction', './transaction/finishedTransaction', './notepad/notepad', './budget/budget', './addressBook/addressBookList', './taskReminder/taskReminder', './postCode/postCode', './friendSetting/friendSetting', './shortcut/shortcut', 'mui'
], function(homeListTpl, browseInfo, distributeInfo, GMInfo, sendEmail, getMail, drafts, sentMail, GMDoc, browseDoc, browseDocDpt, GMDocDpt, browseDocKnowledge, addDocKonwledge, GMDocKonwledge, builtSheet, todoSheet, runSheet, dayOrder, cahier, employeeForum, newTransaction, establishedTransaction, todoTransaction, finishedTransaction, notepad, budget, addressBookList, taskReminder, postCode, friendSetting, shortcut, mui) {
    return function() {
        $(".content").html(homeListTpl)
            // 左侧侧滑菜单
            // 浏览信息
            .on('tap', '.browse-info', function() {
                offCanvasWrapper.offCanvas('close');
                browseInfo();
            })

        // 发布信息
        .on('tap', '.distributeInfo', function() {
            offCanvasWrapper.offCanvas('close');
            distributeInfo();
        })

        // 管理信息
        .on('tap', '.GMInfo', function() {
            offCanvasWrapper.offCanvas('close');
            GMInfo()
        })

        // 发送邮件
        .on("tap", '.send-email', function() {
            offCanvasWrapper.offCanvas('close');
            sendEmail();
        })

        // 接收邮件
        .on('tap', '.get-mail', function() {
            offCanvasWrapper.offCanvas('close');
            getMail();
        })

        // 草稿箱
        .on('tap', '.drafts', function() {
            offCanvasWrapper.offCanvas('close');
            drafts();
        })

        // 已发邮件
        .on('tap', '.sent-mail', function() {
            offCanvasWrapper.offCanvas('close');
            sentMail()
        })

        // 管理文档
        .on('tap', '.GM-document', function() {
            offCanvasWrapper.offCanvas('close');
            GMDoc()
        })

        // 浏览文档
        .on('tap', '.browse-doc', function() {
            offCanvasWrapper.offCanvas('close');
            browseDoc()
        })

        // 部门浏览文档
        .on('tap', '.browse-doc-dpt', function() {
            offCanvasWrapper.offCanvas('close');
            browseDocDpt();
        })

        // 部门管理文档
        .on('tap', '.GM-doc-dpt', function() {
            offCanvasWrapper.offCanvas('close');
            GMDocDpt()
        })

        // 知识浏览文档
        .on('tap', '.browse-doc-K', function() {
            offCanvasWrapper.offCanvas('close');
            browseDocKnowledge()
        })

        // 知识添加文档
        .on('tap', '.add-doc-K', function() {
            offCanvasWrapper.offCanvas('close');
            addDocKonwledge()
        })

        // 知识管理文档
        .on('tap', '.GM-doc-K', function() {
            offCanvasWrapper.offCanvas('close');
            GMDocKonwledge()
        })

        // 已建表单  日常工作计划
        .on('tap', '.built-sheet', function() {
            offCanvasWrapper.offCanvas('close');
            builtSheet()
        })

        // 待办表单
        .on('tap', '.todo-sheet', function() {
            offCanvasWrapper.offCanvas('close');
            todoSheet()
        })

        // 已办表单
        .on('tap', '.run-sheet', function() {
            offCanvasWrapper.offCanvas('close');
            runSheet()
        })

        // 工作日程
        .on('tap', '.day-order', function() {
            offCanvasWrapper.offCanvas('close');
            dayOrder()
        })

        // 会议记录
        .on('tap', '.cahier', function() {
            offCanvasWrapper.offCanvas('close');
            cahier()
        })

        // 员工论坛
        .on('tap', '.employee-forum', function() {
            offCanvasWrapper.offCanvas('close');
            employeeForum()
        })

        // 新建事务
        .on('tap', '.newTransaction', function() {
            offCanvasWrapper.offCanvas('close');
            newTransaction()
        })

        // 已建事务
        .on('tap', '.established-transaction', function() {
            offCanvasWrapper.offCanvas('close');
            establishedTransaction();
        })

        // 待办事务
        .on('tap', '.todo-transaction', function() {
            offCanvasWrapper.offCanvas('close');
            todoTransaction();
        })

        // 已办事务
        .on('tap', '.finishedTransaction', function() {
            offCanvasWrapper.offCanvas('close');
            finishedTransaction();
        })

        // 查阅事务
        .on('tap', '.inquiryTransaction', function() {
            offCanvasWrapper.offCanvas('close');
            inquiryTransaction();
        })

        // 右侧侧滑菜单
        // 记事本
        .on('tap', '.notepad', function() {
            offCanvasWrapper.offCanvas('close');
            notepad();
        })

        // 收支账本
        .on('tap', '.budget', function() {
            offCanvasWrapper.offCanvas('close');
            budget()
        })

        // 通讯录
        .on('tap', '.address-book', function() {
            offCanvasWrapper.offCanvas('close');
            addressBookList();
        })

        // 任务提醒
        .on('tap', '.task-reminder', function() {
            offCanvasWrapper.offCanvas('close');
            taskReminder();
        })

        // 邮编区号
        .on('tap', '.post-code', function() {
            offCanvasWrapper.offCanvas('close');
            postCode();
        })

        // 好友设置
        .on('tap', '.friend-setting', function() {
            offCanvasWrapper.offCanvas('close');
            friendSetting();
        })

        // 快捷方式
        .on('tap', '.shortcut', function() {
            offCanvasWrapper.offCanvas('close');
            shortcut();
        })
        mui.init({
            swipeback: true
        });
        //侧滑容器父节点
        var offCanvasWrapper = mui('#offCanvasWrapper');
        //主界面容器
        var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
        //左菜单容器
        var offCanvasSide = document.getElementById("offCanvasSideLeft");
        // 右菜单容器
        var offCanvasSideRight = document.getElementById("offCanvasSideRight");
        if (!mui.os.android) {
            // document.getElementById("move-togger").classList.remove('mui-hidden');
            var spans = document.querySelectorAll('.android-only');
            for (var i = 0, len = spans.length; i < len; i++) {
                spans[i].style.display = "none";
            }
        }
        //移动效果是否为整体移动
        var moveTogether = false;
        //侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
        var classList = offCanvasWrapper[0].classList;

        // classList.add('mui-slide-in');

        //左侧滑菜单界面支持区域滚动；
        mui('#offCanvasSideScrollLeft').scroll();

        //右侧滑菜单界面支持区域滚动；
        mui('#offCanvasSideScrollRight').scroll();
        mui('#offCanvasSideScroll').scroll();

        //主界面支持区域滚动；
        mui('#offCanvasContentScroll').scroll();
        //实现ios平台原生侧滑关闭页面；
        if (mui.os.plus && mui.os.ios) {
            mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
                plus.webview.currentWebview().setStyle({
                    'popGesture': 'none'
                });
            });
            // offCanvasWrapper[0].addEventListener('hidden', function(e) { //菜单关闭完成事件
            //     plus.webview.currentWebview().setStyle({
            //         'popGesture': 'close'
            //     });
            // });
        }


        // mui('body').on('tap', '.mui-content', function() {
        if (mui('.mui-off-canvas-wrap').offCanvas().isShown('left')) {
            alert(9)
            mui('.mui-off-canvas-wrap').offCanvas().close();
        }

        // })
        document.querySelectorAll(".mui-title")[0].addEventListener("tap", function() {
            mui('#action-sheet-wrapper').popover('toggle');
        })

    }
})