<script lang="ts">
    export let label: string
    export let onClick: () => void;
    export let buttonStyle: 'primary' | 'secondary' | 'destructive' = 'primary';
    export let isAnimated = true;
</script>

<button
        on:click|preventDefault={() => onClick()}
        class="relative whitespace-nowrap rounded-lg px-5 py-2 font-sansSerif text-base font-black lg:px-10 lg:py-3 lg:text-xl"
        class:isAnimated
        class:primary={buttonStyle === 'primary'}
        class:secondary={buttonStyle === 'secondary'}
        class:destructive={buttonStyle === 'destructive'}>
    {label}
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
</style>