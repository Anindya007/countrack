define([
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'text!template/activity.html'
  , 'text!template/graph.html'
  , 'text!template/activity-more.html'
  , 'model/record'
], function(
  $
  , _
  , Backbone
  , ActivityTemplate
  , GraphTemplate
  , MoreTemplate
  , Record
){

  var ActivityView = Backbone.View.extend({

    tagName : 'article',
    className : 'activity container',
    template : _.template(ActivityTemplate),
    graphTemplate : _.template(GraphTemplate),

    events : {
      'click' : 'expandActivity',
      'click .increment' : 'increment',
      'click .delete' : 'delete',
      'click .edit' : 'edit'
    },

    initialize : function(){
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'unpersist', this.remove);
    },

    render : function(){
      this.$el.html(this.template(this.model.toTemplateJSON()));
      this.$el.attr('id', this.model.id);
      this.$el.addClass(this.model.get('nature'));
      this.$el.find('.graph').html(this.graphTemplate({plotPoints : this.model.plotPoints()}));
      this.$el.find('.more').html(MoreTemplate);
      return this;
    },

    expandActivity : function(){
      this.$el.toggleClass('expanded');
    },

    increment : function(evt){
      evt.stopImmediatePropagation();
      var record = new Record();
      this.model.get('records').add(record);
      this.model.set('updated', new Date());
      this.model.trigger('change');
    },

    delete : function(){
      this.model.trigger('unpersist', this.model);
    }

  });

  return ActivityView;

});