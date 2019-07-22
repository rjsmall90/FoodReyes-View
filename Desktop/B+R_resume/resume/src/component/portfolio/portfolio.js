import React, { Component } from 'react';
import { Carousel, Card } from 'react-bootstrap';
 


export class Portfolio extends Component {
  render(){
    return (
      <div className="portfolio">
        <div id="carousel">
            <Carousel>
                <Carousel.Item>
                    <Card target ="_blank" href="https://www.github.com/rjsmall90/rjsresume">
                    <Card.Img class="cards-media"src="images/Rsmall.jpg" />
                    <Card.Body>
                        <Card.Title>Resume/Portfolio Site</Card.Title>
                        <Card.Text>
                            first foray into React; built portfolio/resume site using JSX and the React libraries. First time registering domain and publishing site using AWS & S3 cloud services.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card target ="_blank" href="https://www.github.com/rjsmall90/rjsresume">
                    <Card.Img class="cards-media"src="images/java_logo.jpg" />
                    <Card.Body>
                        <Card.Title>Resume/Portfolio Site</Card.Title>
                        <Card.Text>
                            first foray into React; built portfolio/resume site using JSX and the React libraries. First time registering domain and publishing site using AWS & S3 cloud services.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card target ="_blank" href="https://www.github.com/rjsmall90/rjsresume">
                    <Card.Img class="cards-media"src="images/Rsmall.jpg" />
                    <Card.Body>
                        <Card.Title>Resume/Portfolio Site</Card.Title>
                        <Card.Text>
                            first foray into React; built portfolio/resume site using JSX and the React libraries. First time registering domain and publishing site using AWS & S3 cloud services.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                      <Card>
                        
                      </Card>
                </Carousel.Item>
                <Carousel.Item>
                      <Card>
                        
                      </Card>
                </Carousel.Item>
                <Carousel.Item>
                      <Card>
                        
                      </Card>
                </Carousel.Item>
                <Carousel.Item>
                      <Card>
                        
                      </Card>
                </Carousel.Item>
            </Carousel>
                </div>
      </div>
  );
  }
}

export default Portfolio;
