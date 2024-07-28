<script lang="ts">
    import Icon from '@iconify/svelte';
        
    export let icon: string, size: string, color: string | null;
    // #6db33f spring boot color
</script>

<Icon icon={`${icon}`} width={size} height={size} color={color !== null ? color : ''}/>