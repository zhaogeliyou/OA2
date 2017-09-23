define(['require', 'text!template/home/infoCenter/distributeInfo/distributeInfoTpl.html', 'mui', 'widget', 'iframeTransport', 'fileUpload', 'eleditor', 'webuploader'], function(require, distributeInfoTpl, mui) {
    return function() {
        window.WebUploader = require('webuploader')
        var $distributeInfoTpl = $(distributeInfoTpl);
        $('.main-content').append($distributeInfoTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.infoClassify').stop().animate({ 'opacity': 0, 'z-index': -1 })
        })

        // 页面进入动画
        $('#distributeInfo').stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $distributeInfoTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $distributeInfoTpl.remove()
            })
        })

        // 注册类别点击按钮事件
        .on('tap', '.classifyBtn', function() {
            $('.infoClassify').stop().animate({ 'opacity': 1, 'z-index': 999 }, 200)
            mask.show();
        })

        // 弹出上传文件的选择框
        .on('tap', '.uploadBtn', function() {
            $(this).parent().find("input").click()
        });

        // 注册弹窗取消与确认事件
        $('.infoClassify').on('tap', '.cancle', function() {
                $('.infoClassify').stop().animate({ 'opacity': 0, 'z-index': -1 })
                mask.close();
            })
            .on('tap', '.confirm', function() {
                $('.classifyBtn').find('input').val($('.infoClassify .current').html())
                $('.infoClassify').stop().animate({ 'opacity': 0, 'z-index': -1 })
                mask.close();
            })


        // 初始化编辑器
        var Edr = new Eleditor({
            el: '#article-content', //容器
            //placeHolder: '请输入内容',
            upload: { //上传配置
                server: './../../../dev/src/assets/eleditor/upload.json', //上传路径
                compress: true, //上传前是否压缩图片
                fileSizeLimit: 20 //限制图片上传大小，单位M
            },
        });

        // 文件提交
        $(function() {

            var ul = $('#upload ul');

            // Initialize the jQuery File Upload plugin
            $('#upload').fileupload({
                dataType: 'json',
                url: 'http://127.0.0.1:8080/dev/upload.php',
                add: function(e, data) {

                    // 点击发送按钮提交
                    $(".send").on('tap', function() {
                        alert(3)
                        data.submit()
                    })

                    var tpl = $('<li class="working"><p></p><span></span></li>');

                    // Append the file name and file size
                    tpl.find('p').html(data.files[0].name + '<b>×</b>')
                        .prepend('<i>' + formatFileSize(data.files[0].size) + '</i>');

                    // Add the HTML to the UL element
                    data.context = tpl.appendTo(ul);

                    // Initialize the knob plugin
                    // tpl.find('input').knob();

                    // Listen for clicks on the cancel icon
                    tpl.find('b').click(function() {

                        if (tpl.hasClass('working')) {
                            jqXHR.abort();
                        }

                        tpl.fadeOut(function() {
                            tpl.remove();
                        });

                    });
                },
                done: function(e, data) {
                    alert(9)
                },

                fail: function(e, data) {
                    // Something has gone wrong!
                    data.context.addClass('error');
                }

            });


            // Prevent the default action when a file is dropped on the window
            // $(document).on('drop dragover', function(e) {
            //     e.preventDefault();
            // });

            // Helper function that formats the file sizes
            function formatFileSize(bytes) {
                if (typeof bytes !== 'number') {
                    return '';
                }

                if (bytes >= 1000000000) {
                    return (bytes / 1000000000).toFixed(0) + ' GB';
                }

                if (bytes >= 1000000) {
                    return (bytes / 1000000).toFixed(0) + ' MB';
                }

                return (bytes / 1000).toFixed(0) + ' KB';
            }
        });
    }
})