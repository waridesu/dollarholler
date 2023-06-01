<script>
import Search from "../icon/Search.svelte";
</script>

<div class="relative flex w-full items-baseline">
    <div class="mt-auto mr-2 text-pastelPurple">
        <Search/>
    </div>
    <input type="text" name="search" placeholder="Search by keyword"
           class="search w-full md:w-[14rem] border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif text-base lg:text-xl text-black outline-none focus:border-b-lavenderIndigo focus:border-solid"/>
    <button class="font-sansSerif text-lg lg:text-xl font-black text-pastelPurple">Search</button>
</div>