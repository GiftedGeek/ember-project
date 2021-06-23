import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TableRoute extends Route {
    // Authentication Part
    @service session
    beforeModel(transition) {
        this.session.requireAuthentication(transition, 'login');
    }

    // Table Part *** On Progress ***
    //  VirtualList(config) {
    //     var width = (config && config.w + 'px') || '100%';
    //     var height = (config && config.h + 'px') || '100%';
    //     var itemHeight = this.itemHeight = config.itemHeight;
      
    //     this.items = config.items;
    //     this.columns=config.columns;
    //     this.generatorFn = config.generatorFn;
    //     this.totalRows = config.totalRows || (config.items && config.items.length);
      
    //     var scroller = VirtualList.createScroller(itemHeight * this.totalRows);
    //     this.container = VirtualList.createContainer(width, height);
    //     this.container.appendChild(scroller);
      
    //     var screenItemsLen = Math.ceil(config.h / itemHeight);
    //     this.cachedItemsLen = screenItemsLen * 3;
    //     this._renderChunk(this.container, 0);
      
    //     var self = this;
    //     var lastRepaintY;
    //     var maxBuffer = screenItemsLen * itemHeight;
    //     var lastScrolled = 0;
      
    //     this.rmNodeInterval = setInterval(function() {
    //       if (Date.now() - lastScrolled > 100) {
    //         var badNodes = document.querySelectorAll('[data-rm="1"]');
    //         for (var i = 0, l = badNodes.length; i < l; i++) {
    //           self.container.removeChild(badNodes[i]);
    //         }
    //       }
    //     }, 300);
      
    //     function onScroll(e) {
    //         e = e || window.event;
    //         var te = e.target || e.srcElement;
    //       var scrollTop = te.scrollTop;
    //       if (!lastRepaintY || Math.abs(scrollTop - lastRepaintY) > maxBuffer) {
    //         var first = parseInt(scrollTop / itemHeight) - screenItemsLen;
    //         self._renderChunk(self.container, first < 0 ? 0 : first);
    //         lastRepaintY = scrollTop;
    //       }
      
    //       lastScrolled = Date.now();
    //       e.preventDefault && e.preventDefault();
    //     }
      
    //     if(this.container.attachEvent)
    //         this.container.attachEvent('onscroll', onScroll);
    //     else
    //         this.container.addEventListener('scroll', onScroll);
    //   }
      
    //   VirtualList.prototype.createRow = function(i) {
    //     var item;
    //     if (this.generatorFn)
    //       item = this.generatorFn(i,this.items);
    //     else if (this.items) {
    //       if (typeof this.items[i] === 'string') {
    //         var itemText = document.createTextNode(this.items[i]);
    //         item = document.createElement('div');
    //         item.style.height = this.itemHeight + 'px';
    //         item.appendChild(itemText);
    //       } else { //Object
    //         item = document.createElement('div');
    //         item.style.height = this.itemHeight + 'px';
    //         item.classList.add('fbody');
    //         var left=0;
    //         for( var j=0;j<this.columns.length;j++){//this.items[i]){
    //           var column=this.columns[j];
    //             var cellsText = document.createTextNode(this.items[i][column.field]);
    //             cells = document.createElement('div');
    //           cells.appendChild(cellsText);
    //           cells.style.left=left+"px";
    //           cells.style.right=(this.container.clientWidth -left-column.width)+"px";
    //           left+=column.width;
    //           cells.classList.add('cells');
    //           cells.classList.add('noselect');
    //           item.appendChild(cells);
    //         }
    //       }
    //     }
      
    //     item.classname='vrow';
    //     item.style.position = 'absolute';
    //     item.style.top = (i * this.itemHeight) + 'px';
    //     return item;
    //   };
      
    //   VirtualList.prototype._renderChunk = function(node, from) {
    //     var finalItem = from + this.cachedItemsLen;
    //     if (finalItem > this.totalRows)
    //       finalItem = this.totalRows;
      
    //     var fragment = document.createDocumentFragment();
    //     for (var i = from; i < finalItem; i++) {
    //       fragment.appendChild(this.createRow(i,this.items));
    //     }
      
    //     for (var j = 1, l = node.childNodes.length; j < l; j++) {
    //       node.childNodes[j].style.display = 'none';
    //       node.childNodes[j].setAttribute('data-rm', '1');
    //     }
    //     node.appendChild(fragment);
    //   };
      
    //   VirtualList.createContainer = function(w, h) {
    //     var c = document.createElement('div');
    //     c.style.width = w;
    //     c.style.height = h;
    //     c.style.overflow = 'auto';
    //     c.style.position = 'relative';
    //     c.style.padding = 0;
    //     c.style.border = '1px solid black';
    //     return c;
    //   };
      
    //   VirtualList.createScroller = function(h) {
    //     var scroller = document.createElement('div');
    //     scroller.style.opacity = 0;
    //     scroller.style.position = 'absolute';
    //     scroller.style.top = 0;
    //     scroller.style.left = 0;
    //     scroller.style.width = '1px';
    //     scroller.style.height = h + 'px';
    //     return scroller;
    //   };
      
    //   items=[];
    //   for(var i=0;i<100000;i++)
    //       items[items.length]={a:'a'+i, b:'b'+i, c:'c'+i}
      
    //   var columns=[
    //   {id : 'id1', field :'a', name : 'Attr1', width :70},
    //   {id : 'id2', field :'c', name : 'Attr3', width :70},
    //   {id : 'id3', field :'b', name : 'Attr2', width :70}
    //   ];
      
    //   var list = new VirtualList({
    //            w: 1000,
    //            h: 400,
    //             itemHeight: 24,
    //             //totalRows: 1000,
    //         items: items,
    //         columns: columns
    //           });
          
    //   document.getElementById("container").appendChild(list.container);

    // End of Table Part 
}
