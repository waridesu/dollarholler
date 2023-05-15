<script>
    import { invoices, loadInvoices } from "$lib/stores/InvoiceStore";
    import { onMount } from "svelte";
    import Search from "../../../lib/components/Search.svelte";
    import CircledAmount from "../../../lib/components/CircledAmount.svelte";
    import InvoiceRow from "./InvoiceRow.svelte";

    onMount(() => {
        loadInvoices();
        console.log($invoices)
    });
</script>

<svelte:head>
    <title>Invoices | The Dollar Holler</title>
</svelte:head>

<div class="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-7 lg:mb-16 md:gap-7-4">
    <Search/>
    <div>
        <button class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo lg:px-10 lg:py-3 font-sansSerif text-base lg:text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all ">
            + Invoice
        </button>
    </div>
</div>
<div>
    <div class="table-header hidden lg:invoice-table text-daisyBush">
        <h3>Status</h3>
        <h3>Due Date</h3>
        <h3>ID</h3>
        <h3>Client</h3>
        <h3 class="text-right">Amount</h3>
        <div></div>
        <div></div>
    </div>
    {#each $invoices as invoice}
        <InvoiceRow {invoice}/>
    {/each}
</div>

<CircledAmount label="Total" amount="$1,144.00"/>

<style lang="postcss">
    .table-header h3 {
        @apply text-xl font-black leading-snug;
    }

</style>
