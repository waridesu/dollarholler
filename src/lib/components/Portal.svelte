<script lang="ts">
    function portal(node: HTMLElement) {
        function update() {
            document.body.appendChild(node);
            node.hidden = false;
        }
        function destroy() {
            if (node.parentNode)
            node.parentNode.removeChild(node);
        }

        update()

        return {
            update,
            destroy
        }
    }

</script>

<div hidden use:portal>
    <slot></slot>
</div>