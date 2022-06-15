import { View, SafeAreaView, FlatList } from "react-native";

// local imports
import React, { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  // use inside handleSearch in HomeHeader
  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData);
    // if the user did type something in search then fitler through
    // the filt er function is like .forEach or .map, it is an iterator function
    // where through each iteration we get access to the item were currently iterating over
    // and we can simply check if item.name.toLowerCase.includes(value.toLowerCase())
    // were looping over all of our nfts and were only keeping the ones that includes
    // the value of our current search
    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
      
      );
    // if theres at least one element that exist in filteredData
    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      // if thats not the case then setNftData to be the original unAltered array
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          {/* div that contains our NFT list */}
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
