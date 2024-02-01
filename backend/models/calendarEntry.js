const mongoose = require('mongoose');

const calendarEntrySchema = new mongoose.Schema({
  summary: String,
  description: String,
  start: Date,
  end: Date,
});

module.exports = mongoose.model('CalendarEntry', calendarEntrySchema);
