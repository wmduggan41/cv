Vue.component('resume-builder', {
  template: '#resume-builder-template',
  data() {
    return {
      resume: {
        name: '',
        professionalSummary: '',
        workExperience: '',
        education: '',
        skills: '',
        certifications: ''
      }
    };
  }
});

new Vue({
  el: '#app'
});
