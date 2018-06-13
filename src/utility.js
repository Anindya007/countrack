import _ from 'lodash';


  _.mixin({

    guid : function(){
      var guidPattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
      return guidPattern.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      }); 
    },

    addDays : function(date, days){
      return new Date(date.getFullYear() , date.getMonth(), date.getDate() + days); 
    },

    subtractDays : function(date, days){
      return new Date(date.getFullYear() , date.getMonth(), date.getDate() - days);
    },

    // this method strip out time(zone) info from date.
    stripTime : function(date){
      return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    },

    // this method creates a new date object from passed string.
    // If given date is undefined, then it returns today's date.
    dateOrToday : function(date){
      return date ? new Date(date) : new Date();
    },

    // generates a random number between given numbers.
    random : function(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // this method strips the icon name from the class name and returns it.
    // E.g: "icon-glass selected" will return "glass"
    stripIconName : function(str){
      if(!str) return '';
      var classNames = str.split(/[ \t]+/);
      var iconName = '';
      _.each(classNames, function(name){
        if(name.indexOf('icon-') === 0){
          iconName = name.substr(name.indexOf('-') + 1);
          return false;
        }
      });
      return iconName;
    },

    // determines the weight of the cell based on given count.
    calculateCellWeight : function(count){
      var weight = 'empty';
      if(count == 1){
        weight = 'low';
      }else if (count == 2 || count == 3){ 
        weight = 'medium';
      }else if (count >= 4 && count <= 6){
        weight = 'high';
      }else if(count >= 7){
        weight = 'insane';
      }
      return weight;
    }

  });

  export default  _;