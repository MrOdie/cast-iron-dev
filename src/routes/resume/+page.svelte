<script lang="ts">
    import Icon from '$lib/components/Icon.svelte';
    import type { PageData } from './$types';
    	
    const left = 'col-start-1 col-span-1 row-start-1';
    const right = 'col-start-2 col-span-1 row-start-1';

    export let data: PageData;

</script>

<section class="grid grid-cols-standard">
    {#each [...data.jobs].reverse() as job}
        <article id={job.companyId}
        class="col-span-1 col-start-2 grid grid-cols-resume gap-4 p-6 m-10 bg-tertiary-800">
        <div class={job.id % 2 === 0 ? left : right}>
            <h1 class="text-4xl mb-4">{job.company}</h1>
            <p class="font-bold"><span>Tenure: {job.startDate}</span> &mdash; <span>{job.endDate === null ? `Current Role` : `${job.endDate}`}</span></p>
            <p>{job.role}</p>
            <p>{job.description}</p>
        </div>
        <div class={job.id % 2 === 0 ? right : left }>
            <div class="flex flex-wrap justify-around">
            {#each job.technologyUsed as tech}
                <div class="m-4">
                    <Icon icon={tech} size="6.5rem" color={null}/>
                </div>
            {/each}
            </div>
        </div>
        
        </article>
    {/each}
</section>