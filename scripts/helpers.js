hexo.extend.helper.register('lang_name', function (lang) {
  let data = this.site.data.languages[lang];
  return data;
});

hexo.extend.helper.register('change_lang', function (lang) {
  const canonical = this.page.canonical_path;
  let path = '/';
  if (lang !== 'en') path += lang + '/';

  return this.url_for(path + canonical);
});

hexo.extend.helper.register('url_for_lang', function (path) {
  const lang = this.page.lang;
  let url = path;

  if (lang !== 'en' && url[0] === '/') url = '/' + lang + url;

  return this.url_for(url);
});