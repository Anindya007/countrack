import _ from './utility';

export default  class Records {
		constructor(date){
			this.count = 1;
			this.date =  _.dateOrToday(date);
		}
		
		add(){
			this.count++;
		}
}