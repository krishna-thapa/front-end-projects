<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import PollList from './components/PollList.svelte'
	import CreatePollForm from './components/CreatePollForm.svelte'
	import Tabs from './common/Tabs.svelte'

// tabs
let items = ['Current polls', 'Add New Poll']
let activeItem = 'Current polls'

const tabChange = (e) => {
	activeItem = e.detail;
}

const handleAdd = (e) => {
	activeItem = 'Current polls';
};
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === 'Current polls'}
		<PollList />
	{:else if activeItem === 'Add New Poll'}	
		<CreatePollForm on:add={handleAdd}/>
	{/if}
</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>