<script lang="ts">
    import Portal from "$lib/components/Portal.svelte";
    import Overlay from "$lib/components/Overlay.svelte";
    import Arrow from "$lib/icon/Arrow.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<svelte:window on:keydown={(evt) => {
    if (evt.key === 'Escape') dispatch('closePanel')
    }}/>

<Portal>
    <Overlay/>
    <div class="bg-white overflow-y-auto fixed w-3/4 h-screen py-20 px-32 right-0 top-0 z-slidePanel shadow-slidePanel">
        <button class="absolute top-5 left-7 text-pastelPurple hover:text-daisyBush"
                on:click={() => {dispatch('closePanel')}}>
            <Arrow/>
        </button>
        <slot/>
    </div>
</Portal>