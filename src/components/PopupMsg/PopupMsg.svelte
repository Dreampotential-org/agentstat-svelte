<script>
    export let msg = ''
    export let steps = []
</script>

<div class="popup-msg">
    <p>
        {@html msg}
    </p>
    {#if steps}
        <ul>
            {#each steps as step}
                <li>{step}</li>
            {/each}
        </ul>
    {/if}
</div>