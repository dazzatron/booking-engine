angular.module('jmdApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/templates/booking-summary/booking-summary.html',
    "<div class=\"booking-summary\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <select\r" +
    "\n" +
    "        ng-model=\"SharedResource.sharedData.selectedCurrency\"\r" +
    "\n" +
    "        ng-options=\"currency.value for currency in SharedResource.sharedData.currencies\">\r" +
    "\n" +
    "    </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h1>SUMMARY</h1>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h2>{{ SharedResource.sharedData.trip.name }}\r" +
    "\n" +
    "    </h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"booking-summary-date-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"booking-summary-month\">{{ SharedResource.sharedData.formData.selectedDate.from.month }}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"booking-summary-day\">{{ SharedResource.sharedData.formData.selectedDate.from.date }}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"booking-summary-year\">{{ SharedResource.sharedData.formData.selectedDate.from.year }}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"booking-summary-divider\">\r" +
    "\n" +
    "            <span class=\"booking-summary-arrow\">&#10140;\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"booking-summary-date-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"booking-summary-month\">{{ SharedResource.sharedData.formData.selectedDate.to.month }}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"booking-summary-day\">{{ SharedResource.sharedData.formData.selectedDate.to.date }}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"booking-summary-year\">{{ SharedResource.sharedData.formData.selectedDate.to.year }}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr />\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"float-left\">\r" +
    "\n" +
    "            {{ SharedResource.sharedData.formData.totalGuests }} guest<span ng-if=\"SharedResource.sharedData.formData.totalGuests !== 1\">s</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"float-right\">\r" +
    "\n" +
    "            {{ SharedResource.sharedData.formData.totalGuestCost | currency }}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <hr />\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"float-left\">\r" +
    "\n" +
    "            <b>TOTAL\r" +
    "\n" +
    "            </b>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"float-right\">\r" +
    "\n" +
    "            <b>{{ SharedResource.sharedData.formData.totalGuestCost | currency }}\r" +
    "\n" +
    "            </b>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"float-left\">\r" +
    "\n" +
    "            DEPOSIT\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"float-right\">\r" +
    "\n" +
    "            {{ SharedResource.sharedData.formData.totalGuestCost*.1 | currency }}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--    <div class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <a href=\"\" ng-if=\"SharedResource.sharedData.currentPage < 5\" \r" +
    "\n" +
    "            ng-click=\"SharedResource.sharedData.currentPage = SharedResource.sharedData.currentPage+1\"\r" +
    "\n" +
    "            class=\"call-to-action float-right\">CONTINUE &#10140;\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <br />-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--    <a class=\"general-action\" href=\"\">TERMS AND CONDITIONS\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <b class=\"general-info\">Total price includes all taxes</b>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "    Payment by debit card is free-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/templates/date-selector/date-selector.html',
    "<div ng-controller=\"jmdDateSelectorCtrl\" class=\"date-selector-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <br />\r" +
    "\n" +
    "    <h1>DATES</h1>\r" +
    "\n" +
    "    <h2>GROUP TOUR DEPARTURE DATES</h2>\r" +
    "\n" +
    "    <hr />\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"date-selector-date\"\r" +
    "\n" +
    "        ng-class=\"{ 'active': date === SharedResource.sharedData.formData.selectedDate }\"\r" +
    "\n" +
    "        ng-repeat=\"date in SharedResource.sharedData.trip.dates track by $index\"\r" +
    "\n" +
    "        ng-if=\"SharedResource.sharedData.trip.dates\"\r" +
    "\n" +
    "        ng-click=\"changeDate(date)\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"date-selector-date-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class=\"date-selector-month\">\r" +
    "\n" +
    "                    {{ date.from.month }}\r" +
    "\n" +
    "                </span>  \r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class=\"date-selector-day\">\r" +
    "\n" +
    "                    {{ date.from.date }}\r" +
    "\n" +
    "                </span>            \r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class=\"date-selector-year\">\r" +
    "\n" +
    "                    {{ date.from.year }}\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"date-selector-divider\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class=\"date-selector-arrow\">\r" +
    "\n" +
    "                    &#10140;\r" +
    "\n" +
    "                </span> \r" +
    "\n" +
    "                 \r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"date-selector-date-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class=\"date-selector-month\">\r" +
    "\n" +
    "                    {{ date.to.month }}\r" +
    "\n" +
    "                </span>  \r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class=\"date-selector-day\">\r" +
    "\n" +
    "                    {{ date.to.date }}\r" +
    "\n" +
    "                </span>            \r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class=\"date-selector-year\">\r" +
    "\n" +
    "                    {{ date.to.year }}\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span class=\"date-selector-date-message\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class=\"warning\" ng-if=\"date.soldOut\">\r" +
    "\n" +
    "                    SOLD OUT FOR GROUPS\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class=\"general-info\" ng-if=\"date.limited\">\r" +
    "\n" +
    "                    LIMITED AVAILABILITY\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <input\r" +
    "\n" +
    "                class=\"float-right\"\r" +
    "\n" +
    "                type=\"radio\"\r" +
    "\n" +
    "                ng-value=\"date\"\r" +
    "\n" +
    "                ng-model=\"SharedResource.sharedData.formData.selectedDate\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/templates/extra-selector/extra-selector.html',
    "<div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <h2>EXTRAS</h2>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"pre-trip-wrapper clearfix\" ng-repeat=\"extra in extras\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pre-trip-image\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <img ng-src=\"{{ extra.image }}\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pre-trip-details\">\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <h2>{{ extra.title }}</h2>\r" +
    "\n" +
    "            {{ extra.days }} days<br />\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "            Per person: {{ extra.perPerson | currency }}<br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <button ng-click=\"changeExtra(extra)\" class=\"float-right general-action-2\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span ng-if=\"!extra.selected\">\r" +
    "\n" +
    "                    ADD \r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span ng-if=\"extra.selected\">\r" +
    "\n" +
    "                    REMOVE \r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/templates/pagination/pagination.html',
    "<body style=\"font-style: italic\">\r" +
    "\n" +
    "    <div ng-controller=\"jmdPaginationCtrl\" class=\"pagination clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <button\r" +
    "\n" +
    "        ng-click=\"SharedResource.goToPage($index+1)\"\r" +
    "\n" +
    "        ng-repeat=\"page in pages\" \r" +
    "\n" +
    "        ng-disabled=\"$index > SharedResource.sharedData.currentPage-2\"\r" +
    "\n" +
    "        ng-class=\"{ active: $index === SharedResource.sharedData.currentPage-1 }\">\r" +
    "\n" +
    "        <span ng-class=\"{ completed: $index < SharedResource.sharedData.currentPage-1 }\">{{ $index+1 }}</span>\r" +
    "\n" +
    "        {{ page.label }}\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/templates/pre-trip-selector/pre-trip-selector.html',
    "<div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"pre-trip-wrapper clearfix\" ng-repeat=\"preTrip in SharedResource.trip.preTrips\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pre-trip-image\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <h2>PRE-TRIP TOUR</h2>\r" +
    "\n" +
    "            <h3>Enhance the start of your trip</h3>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <img ng-src=\"{{ preTrip.image }}\" />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"pre-trip-details\">\r" +
    "\n" +
    "            \r" +
    "\n" +
    "            <h2>{{ preTrip.title }}</h2>\r" +
    "\n" +
    "            {{ preTrip.days }} days<br />\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "            Per person: {{ preTrip.perPerson | currency }}<br />\r" +
    "\n" +
    "            Total for all 8 travellers: €8,000.00 \r" +
    "\n" +
    "\r" +
    "\n" +
    "            <br /><br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <button ng-click=\"addPreTrip(preTrip)\" class=\"float-right general-action-2\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span ng-if=\"!preTrip.selected\">\r" +
    "\n" +
    "                    ADD \r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span ng-if=\"preTrip.selected\">\r" +
    "\n" +
    "                    REMOVE \r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                TRIP\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            this is a test\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"slide-down\" ng-if=\"preTrip.showInformation\">\r" +
    "\n" +
    "                <br />\r" +
    "\n" +
    "                more info testermore info testermore info testermore info testermore info \r" +
    "\n" +
    "                testermore info testermore \r" +
    "\n" +
    "                info testermore info testermore info testermore info testermore info tester\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <button ng-click=\"changeInformation(preTrip)\" class=\"general-action\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span ng-if=\"preTrip.showInformation\">\r" +
    "\n" +
    "                    LESS\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span ng-if=\"!preTrip.showInformation\">\r" +
    "\n" +
    "                    MORE\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                INFORMATION\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/templates/room-selector/room-selector.html',
    "<div ng-controller=\"jmdRoomSelectorCtrl\" class=\"rooms-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <header class=\"rooms-header\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h1>rooms and guests</h1>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h2>PRICES BASED ON DOUBLE OCCUPANCY. SINGLE SUPPLEMENTS APPLY.\r" +
    "\n" +
    "        </h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <hr />\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"general-info\">Choices made will be applied to all hotels on this trip. Children under 12 years old are not eligible for this trip.\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </header>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"rooms-body clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"room-wrapper\" ng-repeat=\"room in SharedResource.sharedData.formData.rooms track by $index\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"room-error-wrapper\" ng-if=\"(room.selectedRoom.adults + room.selectedRoom.children) > room.selectedRoom.maxPeople\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"room-error\">\r" +
    "\n" +
    "                    <span>A maximum of<b> {{ room.selectedRoom.maxPeople }} </b>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "                        <span ng-if=\"room.selectedRoom.maxPeople > 1\"><b>guests</b> are</span> \r" +
    "\n" +
    "                        <span ng-if=\"room.selectedRoom.maxPeople == 1\"><b>guest</b> is</span> \r" +
    "\n" +
    "\r" +
    "\n" +
    "                        allowed in this room, please correct.\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"room clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <a href=\"\" \r" +
    "\n" +
    "                    ng-if=\"$index > 0\" \r" +
    "\n" +
    "                    ng-click=\"removeRoom($index)\" \r" +
    "\n" +
    "                    class=\"room-remove\">REMOVE\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div>                                 \r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "                    ROOM\r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <select\r" +
    "\n" +
    "                        ng-model=\"room.selectedRoom\"\r" +
    "\n" +
    "                        ng-options=\"room as room.name for room in room\">\r" +
    "\n" +
    "                    </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <b>\r" +
    "\n" +
    "                    ADULTS\r" +
    "\n" +
    "                    </b>\r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "                    {{ room.selectedRoom.perAdult | currency }}pppn\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <select\r" +
    "\n" +
    "                        ng-model=\"room.selectedRoom.adults\"\r" +
    "\n" +
    "                        ng-options=\"adults as adults for adults in room.selectedRoom.adultOptions\">\r" +
    "\n" +
    "                    </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <b>\r" +
    "\n" +
    "                    CHILDREN\r" +
    "\n" +
    "                    </b>\r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "                    {{ room.selectedRoom.perChild | currency }}pppn\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "                    <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <select\r" +
    "\n" +
    "                        ng-model=\"room.selectedRoom.children\"\r" +
    "\n" +
    "                        ng-options=\"children as children for children in room.selectedRoom.childOptions\">\r" +
    "\n" +
    "                    </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <footer class=\"rooms-footer clearfix\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"float-left\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a href=\"\" ng-if=\"SharedResource.sharedData.formData.totalGuests <= SharedResource.sharedData.trip.maxGroupSize\" ng-click=\"addRoom()\">\r" +
    "\n" +
    "                <span class=\"room-add\">+</span>ADD ANOTHER ROOM\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"float-right\">\r" +
    "\n" +
    "            TOTAL NUMBER OF GUESTS: <b>{{ SharedResource.sharedData.formData.totalGuests }}</b>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div ng-if=\"SharedResource.sharedData.formData.totalGuests > SharedResource.sharedData.trip.maxGroupSize\" class=\"room-guests-error\">\r" +
    "\n" +
    "            A maximum of <b>{{ SharedResource.sharedData.trip.maxGroupSize }} guests</b> are allowed on this trip, please correct.\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </footer>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/templates/trip-selector/trip-selector.html',
    "<div ng-controller=\"jmdTripSelectorCtrl\" class=\"trip-wrapper\" ng-class=\"{ edit: changeTripFlag  }\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-if=\"changeTripFlag && !SharedResource.sharedData.countryTrips\" class=\"trip-loading\">\r" +
    "\n" +
    "        <span>Loading countries & trips...<br />\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "            <img src=\"/img/ajax-loader.gif\" />\r" +
    "\n" +
    "            <br /><br />\r" +
    "\n" +
    "            <a class=\"general-action\" ng-click=\"cancelTrip()\" href=\"\">CANCEL</a>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!--country side-->\r" +
    "\n" +
    "    <div class=\"trip-country-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--edit section-->\r" +
    "\n" +
    "        <div class=\"trip-edit\" ng-if=\"changeTripFlag && SharedResource.sharedData.countryTrips\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <b>SELECT COUNTRY:</b>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <select\r" +
    "\n" +
    "                ng-model=\"SharedResource.sharedData.countryTrips.selectedCountry\"\r" +
    "\n" +
    "                ng-options=\"country as country.name for country in SharedResource.sharedData.countryTrips.countries\">\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--view section-->\r" +
    "\n" +
    "        <div ng-if=\"!changeTripFlag\" class=\"trip-country\">\r" +
    "\n" +
    "            <img border=\"0\" ng-if=\"SharedResource.sharedData.trip.country\" ng-src=\"//maps.googleapis.com/maps/api/staticmap?zoom=3&size=340x210&center={{SharedResource.sharedData.trip.country}}\">\r" +
    "\n" +
    "            <a class=\"general-action\" ng-click=\"changeTrip()\" href=\"\">CHANGE TRIP</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!--trip side-->\r" +
    "\n" +
    "    <div class=\"trip-trip-wrapper\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--edit section-->\r" +
    "\n" +
    "        <div class=\"trip-edit\" ng-if=\"changeTripFlag && SharedResource.sharedData.countryTrips\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <b>SELECT TRIP:</b>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "            <br />\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <select\r" +
    "\n" +
    "                ng-model=\"SharedResource.sharedData.countryTrips.selectedCountry.selectedTrip\"\r" +
    "\n" +
    "                ng-options=\"trip for trip in SharedResource.sharedData.countryTrips.selectedCountry.trips\">\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a class=\"trip-cancel general-action-2\" ng-click=\"cancelTrip()\" href=\"\">CANCEL</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <a class=\"trip-apply general-action\" ng-click=\"changeTrip()\" href=\"\">APPLY CHANGES</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--view section-->\r" +
    "\n" +
    "        <div class=\"trip-country\" ng-if=\"!changeTripFlag\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"trip-trip-image-wrapper\">\r" +
    "\n" +
    "                <h2>{{ SharedResource.sharedData.trip.name }}</h2>\r" +
    "\n" +
    "                <img ng-src=\"{{ SharedResource.sharedData.trip.countryImage }}\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <table class=\"trip-table\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                    Duration:\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                        <b>{{ SharedResource.sharedData.trip.duration }} days</b>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                    Max group size: \r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                    <b>{{ SharedResource.sharedData.trip.maxGroupSize }} persons</b>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <td>\r" +
    "\n" +
    "                    Prices from: \r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <td>                    \r" +
    "\n" +
    "                        <b>{{ SharedResource.sharedData.trip.pricesFrom | currency }}pp</b>\r" +
    "\n" +
    "                    </td>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
