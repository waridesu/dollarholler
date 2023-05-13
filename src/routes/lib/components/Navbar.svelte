<script>
    import {page} from "$app/stores";
</script>

<header class="col-span-3 bg-daisyBush text-center">
    <div>
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