function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
      for (let event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    return events;
  }
  
  console.log(journalEvents(JOURNAL));
  // → ["carrot", "exercise", "weekend", "bread", …]







  for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
  }
  // → carrot:   0.0140970969
  // → exercise: 0.0685994341
  // → weekend:  0.1371988681
  // → bread:   -0.0757554019
  // → pudding: -0.0648203724
  // and so on...



  console.log(String(6).padStart(3, "0"));
// → 006