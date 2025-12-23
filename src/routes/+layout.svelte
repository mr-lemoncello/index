<script lang="ts">
	import file_480 from '$lib/assets/file_480.png';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
</script>

<slot/>

<svelte:head>
	<link rel="image" href={file_480} />
	<link rel="icon" href={favicon} />
  	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
  	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css">
</svelte:head>