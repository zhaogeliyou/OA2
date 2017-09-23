define(['require', 'text!template/home/personGM/postContentTpl.html', 'eleditor', 'webuploader'], function(require, postContentTpl) {
    return function(post) {
        window.WebUploader = require('webuploader')
        $('#postContent').remove();
        var $postContentTpl = $(postContentTpl);
        $('.main-content').append($postContentTpl)
        $postContentTpl.find('input').attr('readonly', 'readonly')
        var floor = 2;
        $(function() {

            // 页面进入动画
            $postContentTpl.stop().animate({ 'top': 0 }, 200)

            // 注册关闭按钮事件
            .on('tap', '.close', function() {
                $postContentTpl.stop().animate({ 'top': '100%' }, 200, function() {
                    $postContentTpl.remove()
                })
            })

            // 注册回复按钮上事件
            .on('tap', '.answer', function() {
                var content = Edr.getContent();
                if (content.trim() && $(content).text() != '点击此处编辑内容' || $('#articleEditor').find('img').length) {
                    floor++;
                    $('.content-container').append('<div class="mui-card">' +
                        '<div class="mui-card-header">' + floor + '# 作者：李萌 发表于 2017/09/09</div>' +
                        '<div class="mui-card-content">' + content + '</div>' +
                        '</div>')

                    $('#articleEditor').html('<p class="Eleditor-placeholder">点击此处编辑内容</p>')
                }
            })

            // 注册删除按钮事件
            .on('tap', '.delete', function() {
                var $this = $(this)
                var btnArray = ['是', '否'];
                mui.confirm('确定删除该计划吗？', '删除后不能恢复', btnArray, function(e) {
                    if (e.index == 0) {
                        alert('确认删除操作')
                        post.remove()
                        $('#postContent').remove();
                    } else {
                        alert('放弃删除')
                    }
                })
                $('.mui-popup-backdrop').css('z-index', 2000)
            })

            // 初始化编辑器
            var Edr = new Eleditor({
                el: '#articleEditor', //容器
                //placeHolder: '请输入内容',
                upload: { //上传配置
                    server: '../../../dev/src/assets/eleditor/upload.json', //上传路径
                    compress: true, //上传前是否压缩图片
                    fileSizeLimit: 20 //限制图片上传大小，单位M
                },
            });
        })
    }
})