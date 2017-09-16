define(['text!template/home/dptDoc/browseDocDptTpl.html', '../../comment/getDocList/getDocList', 'widget', 'iframeTransport', 'fileUpload'], function(browseDocDtpTpl, getDocList) {
    return function() {
        $('#GMDoc').remove();
        var $browseDocDtpTpl = $(browseDocDtpTpl);
        $('.main-content').append($browseDocDtpTpl);

        // 页面进入动画
        $browseDocDtpTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮动画
        .on('tap', '.close', function() {
            $browseDocDtpTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $browseDocDtpTpl.remove();
            })
        })

        // 弹出上传文件的选择框
        .on('tap', '.mui-icon-upload', function() {
            $('#upload').click()
        })

        // 注册列表刷新按钮事件
        .on('tap', '.mui-icon-loop', function() {
            var $this = $(this).parent().siblings('.info-list');
            getDocList($this)
        })


        // Initialize the jQuery File Upload plugin
        $('#upload').fileupload({
            url: './upload.php',
            add: function(e, data) {
                // Automatically upload the file once it is added to the queue
                var jqXHR = data.submit();
            }

        });
    }
})