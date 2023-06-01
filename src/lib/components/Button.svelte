<script lang="ts">
    import type { SvelteComponent } from "svelte";

    export let label: string
    export let onClick: () => void;
    export let buttonStyle: 'primary' | 'secondary' | 'destructive' | 'outline' | 'text-only' | 'text-only-destructive' = 'primary';
    export let isAnimated = true;

    export let iconLeft: (new (...args: unknown[]) => SvelteComponent) | null = null;
    export let iconRight: (new (...args: unknown[]) => SvelteComponent) | null = null;
</script>

<button
        on:click|preventDefault={() => onClick()}
        class="flex items-center relative whitespace-nowrap rounded-lg px-5 py-2 font-sansSerif text-base font-black lg:px-10 lg:py-3 lg:text-xl"
        class:isAnimated
        class:primary={buttonStyle === 'primary'}
        class:secondary={buttonStyle === 'secondary'}
        class:destructive={buttonStyle === 'destructive'}
        class:outline={buttonStyle === 'outline'}
        class:text-only={buttonStyle === 'text-only'}
        class:text-only-destructive={buttonStyle === 'text-only-destructive'}>
    {#if iconLeft}
        <div class="mr-2">
            <svelte:component this={iconLeft}/>
        </div>
    {/if}
    {label}
    {#if iconRight}
        <div class="ml-2">
            <svelte:component this={iconRight}></svelte:component>
        </div>
    {/if}
</button>

<style lang="postcss">
    .isAnimated {
        @apply translate-y-0 hover:-translate-y-2 transition-all shadow-colored hover:shadow-coloredHover ;
    }

    .primary {
        @apply bg-lavenderIndigo text-white;
    }

    .secondary {
        @apply bg-gallery text-daisyBush;
    }

    .destructive {
        @apply bg-scarlet text-goldenFizz;
    }

    .outline {
        @apply border-daisyBush text-daisyBush hover:bg-daisyBush hover:text-white;
    }

    .text-only {
        @apply bg-transparent px-0 text-lavenderIndigo no-underline hover:underline;
    }

    .text-only-destructive {
        @apply bg-transparent px-0 text-scarlet underline hover:no-underline;
    }
</style>