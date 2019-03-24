hexo.extend.helper.register('lang_name', function (lang) {
  let data = this.site.data.languages[lang];
  return data;
});

hexo.extend.helper.register('change_lang', function (lang) {
  const canonical = this.page.canonical_path;
  let path = '/';
  if (lang !== 'en') path += lang + '/';

  return path + canonical;
});