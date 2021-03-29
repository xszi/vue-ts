import iUpload from './src';

/* istanbul ignore next */
iUpload.install = function(Vue) {
  Vue.component(iUpload.name, iUpload);
};

export default iUpload;
