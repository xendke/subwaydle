import { Modal, Header, Grid, Segment, Icon } from 'semantic-ui-react';
import TrainBullet from './TrainBullet';

const AboutModal = (props) => {
  const { trigger } = props;
  return (
    <Modal trigger={trigger} closeIcon size='tiny'>
      <Modal.Header>How to Play</Modal.Header>
      <Modal.Content scrolling>
        <p>Guess the <strong>SUBWAYDLE</strong> in 6 tries.</p>
        <p>Each guess must a be a valid subway trip involving 3 trains using available transfers between them.</p>
        <p><strong>No back tracking:</strong> No stations can be traveled through more than once in each trip.</p>
        <p>Transfers are only allowed if and when the lines diverge (i.e. if two lines are making the same stops, you can't switch back and forth between them,
          You can switch from a local line to an express line then back to the same local line, but you can't switch from an express line to a local line back to the same express line).</p>
        <p>Transfers are allowed to/from St George station via South Ferry, Whitehall St–South Ferry or Bowling Green stations (via Staten Island Ferry). Transfers are also allowed between stations with free out-of-system transfers.
          It is assumed that all stations allow transfer in all directions, even when they're not physically possible in real life (this data is not publicly available).</p>
        <p>Routing for each train line is based on midday schedule (i.e. no peak-direction express, no peak-only branches, no 
          Z, B terminates at 145 St). Weekend puzzles are be based on regularly-scheduled weekend routings.</p>

        <Header as='h4'>Examples</Header>
        <Segment basic>
          <Grid centered columns={4} className='game-grid'>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder className='correct'>
                  <TrainBullet id='A' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainBullet id='N' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainBullet id='7' size='medium' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p>The <TrainBullet id='A' size='small' /> train is in the correct spot of the trip.</p>

        <Segment basic>
          <Grid centered columns={4} className='game-grid'>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainBullet id='J' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='present'>
                  <TrainBullet id='5' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainBullet id='2' size='medium' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p>The <TrainBullet id='5' size='small' /> train is part of the trip, but in the wrong spot.</p>

        <Segment basic>
          <Grid centered columns={4} className='game-grid'>
            <Grid.Row>
              <Grid.Column>
                <Segment placeholder>
                  <TrainBullet id='F' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder>
                  <TrainBullet id='3' size='medium' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment placeholder className='absent'>
                  <TrainBullet id='4' size='medium' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <p>The <TrainBullet id='4' size='small' /> train is not part of the trip in any spot.</p>

        <Header as='h4'>Tips</Header>
        <p>Input using keyboard is supported.</p>
        <p>Use <strong>I</strong> for <TrainBullet id='SI' size='small' />.</p>
        <p>Use <strong>S</strong> for <TrainBullet id='GS' size='small' />.</p>
        <p>Use <strong>K</strong> for <TrainBullet id='FS' size='small' />.</p>
        <p>Use <strong>H</strong> for <TrainBullet id='H' size='small' />.</p>

        <Header as='h4'>About</Header>

        <p>Inspired by <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Wordle</a>,
          its <a href="https://github.com/hannahcode/wordle" target="_blank">open-source clone</a>, <a href="https://nerdlegame.com/" target="_blank">Nerdle</a>,
          and <a href="https://www.nytransitmuseum.org/">New York Transit Museum</a> Trivia Nights.</p>

        <p>Created by <a href="https://www.sunny.ng" target="_blank">Sunny Ng</a><a href='https://twitter.com/_blahblahblah' target='_blank'><Icon name='twitter' link /></a></p>
        <p><a href="https://github.com/blahblahblah-/subwaydle" target="_blank">Source code</a>.</p>
        <p>Check out my other NYC Subway related projects: <a href="https://www.theweekendest.com" target="_blank">The Weekendest</a> and <a href="https://www.goodservice.io" target="_blank">goodservice.io</a>.</p>
      </Modal.Content>
    </Modal>
  );
}

export default AboutModal;
