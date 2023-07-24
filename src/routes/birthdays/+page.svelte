<script>
    import Birthday from './Birthday.svelte';
    export let data;
</script>

<h1>Birthday list</h1>
<ol>
    {#each data.birthdays as birthday}
        <li>
            <Birthday {...birthday} />
        </li>
    {/each}
</ol>