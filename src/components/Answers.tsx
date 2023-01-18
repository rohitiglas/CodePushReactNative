import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Buttons from '../components/Buttons';
import {AnswerObject} from '../screens/ Quiz';

interface Answers {
  useranswer: AnswerObject | undefined;
  answers: string[];
  setcorrectanswer: any;
  checkanswer: () => void;
}

const Answers: FC<Answers> = props => {
  const {answers, useranswer, setcorrectanswer, checkanswer} = props;
  return (
    <SafeAreaView>
      <View style={{marginTop: 10, paddingHorizontal: 20}}>
        {answers.map((answer, key) => {
          return (
            <View key={answer}>
              <Buttons
                {...{key, answer}}
                correct={useranswer?.correctanswer === answer}
                disabled={useranswer ? true : false}
                onPress={() => {
                  (setcorrectanswer.current = answer), checkanswer();
                }}
              />
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  questioncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    paddingRight: 16,
  },

  textstyle: {padding: 15, fontSize: 15, color: 'blue'},
});

export default Answers;
