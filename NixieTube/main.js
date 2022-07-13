const App = {
	data() {
		return {
			h: '19',
			m: '45',
			s: '22',
			showSec: false,
		}
	},
	mounted() {
		setInterval(this.update, 1000);
	},
	methods: {
		update() {
			let now = new Date();
			this.h = now.getHours().toString();
			this.m = now.getMinutes().toString();
			this.s = now.getSeconds().toString();
			if (this.h < 10) {
				this.h = '0' + this.h;
			}
			if (this.m < 10) {
				this.m = '0' + this.m;
			}
			if (this.s < 10) {
				this.s = '0' + this.s;
			}
			console.log(this.h, this.m, this.s);
		}
	}
};

const app = Vue.createApp(App);

app.component('tube', {
	props:['dight'],
	template: `
	<div class="nixie-container">
		<div class='nixie-background active'></div>
		<svg class='nixie-number nixie-number-1' :class="{active: dight == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<line class="nixie-number-part" x1="128" y1="10" x2="66" y2="72" />
			<line class="nixie-number-part" x1="128" y1="492" x2="128" y2="10" />
		</svg>
		<svg class='nixie-number nixie-number-2' :class="{active: dight == 2}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<path class="nixie-number-part"
				d="M38.3,66.4C59.3,32,91.7,10,128,10c63.5,0,115,67.5,115,150.7s-51.5,150.7-115,150.7" />
			<path class="nixie-number-part" d="M13,496c0-102,51.5-184.7,115-184.7" />
			<line class="nixie-number-part" x1="13" y1="496" x2="227.3" y2="496" />
		</svg>
		<svg class='nixie-number nixie-number-0' :class="{active: dight == 0}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<ellipse class="nixie-number-part" cx="128" cy="256" rx="115" ry="246" />
		</svg>
		<svg class='nixie-number nixie-number-3' :class="{active: dight == 3}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<path class="nixie-number-part"
				d="M22,410.8c16.8,46.4,57.9,86.3,106,85.9c59.7-0.5,115-63,115-140.6c0-74.1-50.4-126.7-93.5-138.1" />
			<line class="nixie-number-part" x1="149.5" y1="218" x2="243" y2="13" />
			<line class="nixie-number-part" x1="27.3" y1="13" x2="243" y2="13" />
		</svg>
		<svg class='nixie-number nixie-number-9' :class="{active: dight == 9}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<circle class="nixie-number-part" cx="128" cy="128" r="115" />
			<line class="nixie-number-part" x1="237.4" y1="163.7" x2="135.8" y2="499" />
		</svg>
		<svg class='nixie-number nixie-number-4' :class="{active: dight == 4}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<line class="nixie-number-part" x1="196.2" y1="13" x2="196.2" y2="496.7" />
			<line class="nixie-number-part" x1="196.2" y1="356.1" x2="22" y2="356.1" />
			<line class="nixie-number-part" x1="196.2" y1="13" x2="22" y2="356.1" />
		</svg>
		<svg class='nixie-number nixie-number-8' :class="{active: dight == 8}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<ellipse class="nixie-number-part" cx="128" cy="129" rx="99.2" ry="116" />
			<ellipse class="nixie-number-part" cx="128" cy="370.8" rx="112.5" ry="125.8" />
		</svg>
		<svg class='nixie-number nixie-number-5' :class="{active: dight == 5}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<path class="nixie-number-part"
				d="M38.3,442.6C59.3,477,91.7,499,128,499c63.5,0,115-67.5,115-150.7s-51.5-150.7-115-150.7" />
			<path class="nixie-number-part" d="M13,13c0,102,51.5,184.7,115,184.7" />
			<line class="nixie-number-part" x1="13" y1="13" x2="227.3" y2="13" />
		</svg>
		<svg class='nixie-number nixie-number-7' :class="{active: dight == 7}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<line class="nixie-number-part" x1="15.5" y1="13" x2="240.5" y2="13" />
			<line class="nixie-number-part" x1="128" y1="496.7" x2="240.5" y2="13" />
		</svg>
		<svg class='nixie-number nixie-number-6' :class="{active: dight == 6}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
			version="1.1">
			<circle class="nixie-number-part" cx="128" cy="384" r="115" />
			<line class="nixie-number-part" x1="18.6" y1="348.3" x2="120.2" y2="13" />
		</svg>
	</div>
	`
})

const vm = app.mount('#app');
