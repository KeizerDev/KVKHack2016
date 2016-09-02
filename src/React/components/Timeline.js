var React = require('react');
var TimelineItem = require('./TimelineItem.js');

class Timeline extends React.Component {
    super() {
        console.log(mojs)
    }

    componentDidMount() {
    }

    render() {

//   <div class="events-content">
//     <ol>
//       <li class="selected" data-date="16/01/2014">
//         <h2>Horizontal Timeline</h2>
//         <em>January 16th, 2014</em>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
//         </p>
//       </li>

//       <li data-date="28/02/2014">
//         <!-- event description here -->
//       </li>

//       <!-- other descriptions here -->
//     </ol>
//   </div> <!-- .events-content -->
// </section>
        return (<section class="l-timeline">
                  <div class="timeline">
                    <div class="events-wrapper">
                      <div class="events">
                        <ol>
                          <li><a href="#0" data-date="16/01/2014" class="selected">16 Jan</a></li>
                          <li><a href="#0" data-date="28/02/2014">28 Feb</a></li>
                        </ol>
                        <span class="filling-line" aria-hidden="true"></span>
                      </div>
                    </div>
                    <ul class="cd-timeline-navigation">
                      <li><a href="#0" class="prev inactive">Prev</a></li>
                      <li><a href="#0" class="next">Next</a></li>
                    </ul>
                </div>
            </section>);
    }
}

module.exports = Timeline;
