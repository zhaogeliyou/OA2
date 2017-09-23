define(['require', 'text!template/home/dayCoop/cahierContentTpl.html', 'eleditor', 'webuploader'], function(require, cahierContentTpl) {
    return function() {
        window.WebUploader = require('webuploader')
        $('#cahierContentTpl').remove();
        var $cahierContentTpl = $(cahierContentTpl);
        $('.main-content').append($cahierContentTpl)

        // 页面进入动画
        $cahierContentTpl.stop().animate({ 'top': 0 }, 200)

        // 注册关闭按钮事件
        .on('tap', '.close', function() {
            $cahierContentTpl.stop().animate({ 'top': '100%' }, 200, function() {
                $cahierContentTpl.remove()
            })
        })

        // 注册修改按钮上事件
        .on('tap', '.modify', function() {
            $('.cover').css('display', 'none')
            $('p').attr('contenteditable', 'true')
            $(this).html('保存')
        })

        // 初始化编辑器
        var Edr = new Eleditor({
            el: '#articleEitor', //容器
            //placeHolder: '请输入内容',
            upload: { //上传配置
                server: '../../../dev/src/assets/eleditor/upload.json', //上传路径
                compress: true, //上传前是否压缩图片
                fileSizeLimit: 20 //限制图片上传大小，单位M
            },
        });

        $('#articleEitor').html("<div>hskjflsdjflsdjf </div> ")
    }
})