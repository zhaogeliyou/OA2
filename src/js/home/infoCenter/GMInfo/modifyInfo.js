define(['text!template/home/infoCenter/distributeInfo/distributeInfoTpl.html', 'wangEditor', 'mui', 'widget', 'iframeTransport', 'fileUpload', 'artEditor'], function(distributeInfoTpl, E, mui) {
    return function($this) {
        var $distributeInfoTpl = $(distributeInfoTpl);
        $('.main-content').append($distributeInfoTpl);

        // 创建蒙版
        var mask = mui.createMask(function() {
            $('.infoClassify').stop().animate({ 'opacity': 0, 'z-index': -1 })
        })

        // 初始化修改页面数据
        $('.classifyBtn input').val($this.parent().siblings('.info-title').text())
        $('.info-item-title').val($this.find('span:nth-child(2)').html())

        // 页面进入动画
        $('#distributeInfo').css({ 'left': 0, 'top': '100%' }).stop().animate({ 'top': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $('#distributeInfo').stop().animate({ 'top': '100%' }, 200, function() {
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
                uploadUrl: 'upload-file.php',

                // This element will accept file drag/drop uploading
                // dropZone: $('#drop'),

                // This function is called when a file is added to the queue;
                // either via the browse button, or via drag/drop:
                add: function(e, data) {

                    // 点击发送按钮提交
                    $(".send").on('tap', function() {
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

                    // Automatically upload the file once it is added to the queue
                    var jqXHR = data.submit();
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