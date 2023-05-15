<script>
    import {page} from "$app/stores";
    import Close from "../icon/Close.svelte";
    import Hamburger from "../icon/Hamburger.svelte";

    let isNavShowing = false;
</script>
<svelte:head>
    {#if isNavShowing}
        <style lang="postcss">
            body {
                @apply overflow-hidden md:overflow-auto;
            }
        </style>
    {/if}
</svelte:head>
<button class="fixed right-6 top-6 z-navBarToggle md:hidden"
        on:click={() => {isNavShowing = !isNavShowing}}
        class:text-goldenFizz={isNavShowing}
        class:text-daisyBusy={!isNavShowing}>
    {#if isNavShowing}
        <Close width={32} height={32}/>
    {:else}
        <Hamburger width={32} height={32}/>
    {/if}
</button>
<header class="fixed z-navBar transition-transform md:relative -translate-x-full md:translate-x-0 md:col-span-3 w-full h-screen md:h-full bg-daisyBush text-center"
        class:translate-x-0={isNavShowing}>
    <div class="mt-10 mb-10 md:mb-24">
        <a href="/invoices">
            <img src="/images/logo.svg" alt="The Dollar Holler" class="mx-auto"/>
        </a>
    </div>
    <nav>
        <ul class="list-none text-2xl font-bold">
            <li>
                <a href="/invoices" class:active={$page.url.pathname === '/invoices'}>Invoices</a>
            </li>
            <li>
                <a href="/client" class:active={$page.url.pathname === '/client'}>Client</a>
            </li>
            <li>
                <a href="/setting" class:active={$page.url.pathname === '/setting'}>Setting</a>
            </li>
            <li>
                <a href="/logout" class:active={$page.url.pathname === '/logout'}>Logout</a>
            </li>
        </ul>
    </nav>
</header>

<style lang="postcss">
    nav ul li {
        @apply mb-6;
    }

    nav ul li a {
        @apply font-bold text-white hover:text-goldenFizz
    }

    nav ul li a.active {
        @apply text-robinEggBlue px-8 transition-[padding];
        background: url("/images/active-nav--left.svg") left top no-repeat, url("/images/active-nav--right.svg") right top no-repeat;
    }

    nav ul li a.active:hover {
        @apply px-9;
    }
</style>