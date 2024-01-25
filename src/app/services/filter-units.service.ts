import { Injectable } from '@angular/core';
import { Location } from '../interfaces/unit.interface';

const OPENING_HOURS = {
  morning: {
    first: '06',
    last: '12',
  },
  afternoon: {
    first: '12',
    last: '18',
  },
  evening: {
    first: '18',
    last: '23',
  },
}

type HourIndexes = 'morning' | 'afternoon' | 'evening'


@Injectable({
  providedIn: 'root'
})
export class FilterUnitsService {

  constructor() { }

  transformWeekday(weekday: number){
    switch(weekday){
      case 0:
        return 'Dom.'
      case 6:
        return 'Sáb.'
      default:
        return 'Seg. à Sex.'
    }
  }

  filterUnits(unit: Location, open_hour?: string, close_hour?: string){
    if(!unit.schedules){ return true}
    const open_hour_filter = parseInt(open_hour ?? '', 10);
    const close_hour_filter = parseInt(close_hour ?? '', 10);

    const todays_date = this.transformWeekday(new Date().getDay());
      for (const schedule of unit.schedules) {
        const schedule_hour = schedule.hour;
        const schedule_weekday = schedule.weekdays;
        if(todays_date === schedule_weekday){
          if(schedule_hour !== 'Fechada'){
            let [unit_open_hour, unit_close_hour] = schedule_hour.split(' às ');
            let unit_open_hour_int = parseInt(unit_open_hour.replace('h', ''), 10)
            let unit_close_hour_int = parseInt(unit_close_hour.replace('h', ''), 10)

            if (unit_open_hour_int <= open_hour_filter && unit_close_hour_int >= close_hour_filter) return true;
            else false;
          }
        }
      }
    return false;
  }

  filter(results: Location[], showClosed: boolean, hour: string){
    let intermediateResults = results;

    if(!showClosed){
      intermediateResults = results.filter(location => location.opened === true)
    }
    if(hour){
      console.log(intermediateResults)
      const OPEN_HOUR = OPENING_HOURS[hour as HourIndexes].first
      const CLOSE_HOUR = OPENING_HOURS[hour as HourIndexes].last
      return intermediateResults.filter(location => this.filterUnits(location, OPEN_HOUR, CLOSE_HOUR))
    }
    if(!hour){
      return intermediateResults;
    }
    return intermediateResults
  }
}
