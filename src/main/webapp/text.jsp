<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!-- import CSS -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
</head>
<body>

<iframe src="file/pdf/01.pdf" width="400px" height="800px"></iframe>


<%--<div id="app">--%>
<%--    <el-button @click="visible = true">Button</el-button>--%>
<%--    <el-dialog :visible.sync="visible" title="Hello world">--%>
<%--        <p>Try Element</p>--%>
<%--    </el-dialog>--%>
<%--</div>--%>
</body>
<!-- import Vue before Element -->
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>
<!-- import JavaScript -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
    new Vue({
        el: '#app',
        data: function() {
            return { visible: false }
        }
    })
</script>
</html>
