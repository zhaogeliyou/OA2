define(['text!template/home/dptDoc/GMDocDptTpl.html', '../../comment/getDocList/getDocList', 'widget', 'iframeTransport', 'fileUpload'], function(GMDocDtpTpl, getDocList) {
    return function() {
        $('#GMDoc').remove();
        var $GMDocDtpTpl = $(GMDocDtpTpl);
        $('.main-content').append($GMDocDtpTpl);

        // 页面进入动画
        $GMDocDtpTpl.stop().animate({ 'left': 0 }, 200)

        // 注册关闭按钮动画
        .on('tap', '.close', function() {
            $GMDocDtpTpl.stop().animate({ 'left': '100%' }, 200, function() {
                $GMDocDtpTpl.remove();
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