define(['require', 'text!template/home/email/sendEmailTpl.html', '../../comment/chooseUser2', 'widget', 'iframeTransport', 'fileUpload', 'eleditor', 'webuploader'], function(require, sendEmailTpl, chooseUser) {
    return function() {
        window.WebUploader = require('webuploader')
        $('#sendEmailContent').remove();
        var $sendEmailTpl = $(sendEmailTpl)
            // 加载收件人模块
            .on('tap', '.addRecipient', function() {
                chooseUser();
            })
            // 加载抄送模块
            .on('tap', '.copy', function() {
                var $this = $(this)
                chooseUser($this);
            })
            // 弹出上传文件的选择框
            .on('tap', '.uploadBtn', function() {
                $(this).parent().find("input").click()
            });
        $(function() {
            $sendEmailTpl.stop(true, true).animate({ 'top': 0, 'opacity': 1 }).on('tap', '.email-send', function() {
                $sendEmailTpl.stop(true, true).animate({ 'top': '44px', 'opacity': 0 }, function() {
                    $sendEmailTpl.remove();
                })
            })
        })
        $('.main-content').append($sendEmailTpl);

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