// Center Key Software  ~  www.centerkey.com
// License: http://en.wikipedia.org/wiki/WTFPL

if (!app)
   var app = {};

app.bookstore = {
   books: [
      { title: 'Go JavaScript', author: 'Jake' },
      { title: 'Styling CSS3',  author: 'Abby' },
      { title: 'Howdy HTML5',   author: 'Ed' }
      ],
   clear: function() {
      dna.empty('book', { fade: true });
      },
   feelLucky: function() {
      var lucky = Math.floor(Math.random() * app.bookstore.books.length);
      dna.clone('book', app.bookstore.books[lucky], { fade: true });
      },
   setup: function() {
   	if ($('.featured-books').exists()) {
         $('#action-books-clear').click(app.bookstore.clear);
         $('#action-books-add').click(app.bookstore.feelLucky);
         dna.clone('book', { title: 'The DOM', author: 'Jan' });
         }
      }
   };

app.nav = {
   setup: function() {
		var current = $('.navigation-bar a')
		   .filter('[href="' + window.location.pathname.split('/').pop() + '"]')
		   .closest('li');
		if (!current.exists())
			current = $('.navigation-bar li').first();
		current.addClass('current');
      }
   }

$(function() {
   app.nav.setup();
   app.bookstore.setup();
   });
