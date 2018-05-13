Vue.component('cn-modal', {
			props: ['body'],
			template: `
				<div class="modal is-active">
					<div class="modal-background"></div> 
					<div class="modal-content">
						<div class="box">
							<p>{{ body }}</p>
						</div>
					</div>
					<button class="modal-close" @click="$emit('close')"></button>
				</div>`
		});

		var vm = new Vue({
			el : "#vue-instance",
			data: {
				showModal: false
			},
			methods: {

			},
			computed: {
				
			}
		});