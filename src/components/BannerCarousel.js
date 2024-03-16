import React, {Component} from 'react'
import {View, FlatList, StyleSheet, Image, Dimensions} from 'react-native'

const DATA = [
  {id: '1', image: require('../images/image2.jpg')},
  {id: '2', image: require('../images/image2.jpg')},
  {id: '3', image: require('../images/image1.jpg')},
  {id: '4', image: require('../images/image1.jpg')}
]

const screenWidth = Dimensions.get('window').width

class ProductList extends Component {
  state = {
    currentPageIndex: 0
  }

  handlePageChange = (event) => {
    const {contentOffset} = event.nativeEvent
    const pageIndex = Math.floor(contentOffset.x / screenWidth)
    this.setState({currentPageIndex: pageIndex})
  }

  renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
    </View>
  )

  render() {
    const {currentPageIndex} = this.state

    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.handlePageChange}
        />
        <View style={styles.pageIndicatorContainer}>
          {DATA.map((_, index) => (
            <View
              key={index}
              style={[
                styles.pageIndicator,
                index === currentPageIndex && styles.currentPageIndicator
              ]}
            />
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 20
  },
  item: {
    width: screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  image: {
    width: screenWidth * 0.9,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  pageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 4
  },
  currentPageIndicator: {
    backgroundColor: '#333'
  }
})

export default ProductList
