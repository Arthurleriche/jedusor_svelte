import App from './App.svelte';

new App({
	target: document.querySelector('#ListBasket'),
	props: {
		categoryName: "BASKET", 
		color1 : "#f56565",
		color2 : "#e53e3e",
		src : "./img/basketball.png",
		todos : [{	
			name: "Préparer le Playbook",
			completed: true
		},
		{
			name: "      click to modify",
			completed: false
		}]
	}
});



new App({
	target: document.querySelector('#ListRap'),
	props: {
		categoryName: "DEV",
		color1 : "#4299e1",
		color2 : "#3182ce",
		src : "./img/computer.png",
		name: 'bruno',
		todos : [{
			name: "Svelte + tailwindcss",
			completed: true
		},
		{
			name: "      click to modify",
			completed: false
		}]

	}
});


new App({
	target: document.querySelector('#ListDev'),
	props: {
		
		categoryName: "RAP",
		color1 : "#ed8936",
		color2 : "#dd6b20",
		src : "./img/micro.png",
		todos : [
		{
			name: "Bundle d'instru",
			completed: false
		},
		
		{
			name: "      click to modify",
			completed: false
		}]
	}
});


