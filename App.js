import React, { Component } from 'react';
import MapView from 'react-native-maps';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          region: {
              latitude: 53.042588,
              longitude: 13.419308, 
              latitudeDelta: 0.0993,
              longitudeDelta: 0.0993,
          },
      };
  }
  onRegionChange(region) {
      this.setState({ region });
  }

  render() {
      return (
          <MapView
              style={{ flex: 1 }}
              initialRegion={this.state.region}
              onRegionChange={this.onRegionChange.bind(this)}
          >
              <MapView.Marker
                  title="Benim"
                  description="Konumun aciklamasi"
                  coordinate={{
                      latitude: 53.042588,
                      longitude: 13.419308,
                  }}
                  onPress={() => {}}
                  pinColor="#ff7f27"
              />
          </MapView>
      );
  }
}

export default App;
