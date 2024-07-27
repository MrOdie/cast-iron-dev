<script lang="ts">
    import Icon from '@iconify/svelte';
    import type { PageData } from './$types';
    	
    const left = 'col-start-2 col-span-1 row-start-1';
    const right = 'col-start-3 col-span-1 row-start-1';
	export let data: PageData;

    console.log(data);
</script>

<section class="grid grid-cols-standard">
    {#each [...data.jobs].reverse() as job}
        <article id={job.companyId}
        class="col-span-1 col-start-2 grid grid-cols-resume gap-4 p-6 m-10 bg-tertiary-800">
        <div class={job.id % 2 === 0 ? right : left}>
            <h1 class="text-2xl">{job.company}</h1>
            <p class="strong"><span>Tenure: {job.startDate}</span> &mdash; <span>{job.endDate === null ? `Current Role` : `${job.endDate}`}</span></p>
            <p>{job.role}</p>
            <p>{job.description}</p>
        </div>
        <div class={job.id % 2 === 0 ? left : right }>
            <Icon icon="devicon:css3" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:html5" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:javascript" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:java" width="3.5rem" height="3.5rem" />
            <Icon icon="skill-icons:php-dark" width="3.5rem" height="3.5rem" />

            <Icon icon="devicon:scss" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:handlebars" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:react" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:nextjs" width="3.5rem" height="3.5rem" />
            <Icon icon="skill-icons:angular-dark" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:svelte" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:jquery" width="3.5rem" height="3.5rem" />

            <Icon icon="devicon:laravel" width="3.5rem" height="3.5rem" />

            <Icon icon="simple-icons:springboot" width="3.5rem" height="3.5rem" style="color: #6db33f" />

            <Icon icon="devicon:jekyll" width="3.5rem" height="3.5rem" />

            <Icon icon="skill-icons:mysql-dark" width="3.5rem" height="3.5rem" />
            <Icon icon="skill-icons:postgresql-dark" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:kubernetes" width="3.5rem" height="3.5rem" />
            <Icon icon="devicon:docker" width="3.5rem" height="3.5rem" />
            <Icon icon="skill-icons:aws-dark" width="3.5rem" height="3.5rem" />
            <Icon icon="skill-icons:gcp-dark" width="3.5rem" height="3.5rem" />
            <Icon icon="vscode-icons:file-type-less" width="3.5rem" height="3.5rem" />            
            
            {#each job.technologyUsed as tech}
                <p>{tech}</p>
            {/each}
        </div>
        
        </article>
    {/each}
</section>