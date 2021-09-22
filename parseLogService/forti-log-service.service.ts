import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FortiLogServiceService {

  constructor() { }

  fortiParseFunction(limitParams, response) {
    var LogTable = []
    for (let i = 0; i < limitParams; i++) {
      let fortigateLog = response[i].log
      const regex = /(?<key>[a-zA-Z]+)="+(?<value>[^"]+)"+/gm; // Tirnakli
      const regexTwo = /(?<key>[a-zA-Z]+)=(?<value>[^\s|"]+)/gm; // Tirnaksız
      let m;
      let n;

      var allLog = []
      var logList = []
      var showLoglist = ["date", "time", "devname", "type", "srcip", "dstip"]
      var showAllLogList = []

      //tirnakli içerikler için kullanılıyor
      while ((m = regex.exec(fortigateLog)) !== null) {
        var oneLog = {
          logKey: m.groups.key,
          logValue: m.groups.value
        }
        allLog.push(oneLog)
      }

      while ((n = regexTwo.exec(fortigateLog)) !== null) {
        var oneLog = {
          logKey: n.groups.key,
          logValue: n.groups.value
        }
        allLog.push(oneLog)
      }

      // Key value şeklinde olması için
      for (let i = 0; i < allLog.length; i++) {
        const key = allLog[i].logKey
        const logValue = allLog[i].logValue
        logList.push({key, logValue})
      }
      
      for (let e = 0; e < logList.length; e++) {
        var logName = logList[e].key
        var varMı = showLoglist.indexOf(logName)
        if (varMı >= 0) {
          showAllLogList.push(allLog[e].logValue)
        } else { }
      }
    
      var LogData = {
        id: response[i].id,
        log: showAllLogList,
        currentDate: response[i].currentDate,
        currentTime: response[i].currentTime,
        allDetailLog: logList
      }
      LogTable.push(LogData)
    }

    return LogTable
  }
}
