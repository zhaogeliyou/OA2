define(['text!template/home/email/sendEmailTpl.html', '../../comment/chooseUser2', 'wangEditor', 'widget', 'iframeTransport', 'fileUpload', 'artEditor'], function(sendEmailTpl, chooseUser, E) {
    return function() {
        $('#sendEmailContent').remove();
        var $sendEmailTpl = $(sendEmailTpl)
            // 加载收件人模块
            .on('tap', '.addRecipient', function() {
                chooseUser();
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
        var editor = $('.article-content');
        editor.each(function(i, v) {
            var editor = new E(v)
            editor.customConfig.menus = [
                'head',
                'bold',
                'italic',
                'link'
            ];
            editor.create();
        })



        // 文件提交
        $(function() {

            var ul = $('#upload ul');

            // Initialize the jQuery File Upload plugin
            $('#upload').fileupload({
                url: './upload.php',

                // This element will accept file drag/drop uploading
                // dropZone: $('#drop'),

                // This function is called when a file is added to the queue;
                // either via the browse button, or via drag/drop:
                add: function(e, data) {

                    // 点击发送按钮提交
                    $(".send").on('tap', function() {
                        var jqXHR = data.submit()
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

                    // Automatically upload the file once it is added to the queue
                    // var jqXHR = data.submit();
                },

                progress: function(e, data) {

                    // Calculate the completion percentage of the upload
                    var progress = parseInt(data.loaded / data.total * 100, 10);

                    // Update the hidden input field and trigger a change
                    // so that the jQuery knob plugin knows to update the dial
                    data.context.find('input').val(progress).change();

                    if (progress == 100) {
                        data.context.removeClass('working');
                    }
                },

                fail: function(e, data) {
                    // Something has gone wrong!
                    data.context.addClass('error');
                    alert(5)
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