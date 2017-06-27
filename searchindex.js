Search.setIndex({docnames:["api/modules","api/sonnet","api/sonnet.examples","api/sonnet.python","api/sonnet.python.modules","api/sonnet.python.modules.nets","api/sonnet.python.ops"],envversion:52,filenames:["api/modules.rst","api/sonnet.rst","api/sonnet.examples.rst","api/sonnet.python.rst","api/sonnet.python.modules.rst","api/sonnet.python.modules.nets.rst","api/sonnet.python.ops.rst"],objects:{"":{sonnet:[1,0,0,"-"]},"sonnet.examples":{dataset_shakespeare:[2,0,0,"-"],module_with_build_args:[2,0,0,"-"],rnn_shakespeare:[2,0,0,"-"]},"sonnet.examples.dataset_shakespeare":{SequenceDataOpsNoMask:[2,1,1,""],TinyShakespeareDataset:[2,1,1,""],TokenDataSource:[2,1,1,""]},"sonnet.examples.dataset_shakespeare.SequenceDataOpsNoMask":{obs:[2,2,1,""],target:[2,2,1,""]},"sonnet.examples.dataset_shakespeare.TinyShakespeareDataset":{TEST:[2,2,1,""],TRAIN:[2,2,1,""],VALID:[2,2,1,""],cost:[2,3,1,""],to_human_readable:[2,3,1,""],vocab_size:[2,2,1,""]},"sonnet.examples.dataset_shakespeare.TokenDataSource":{CHAR_EOS:[2,2,1,""],DEFAULT_START_TOKENS:[2,2,1,""],NULL:[2,2,1,""],UNK:[2,2,1,""],WORD_EOS:[2,2,1,""],decode:[2,3,1,""],tokenize:[2,3,1,""]},"sonnet.examples.module_with_build_args":{custom_build:[2,4,1,""],main:[2,4,1,""]},"sonnet.examples.rnn_shakespeare":{TextModel:[2,1,1,""],build_graph:[2,4,1,""],main:[2,4,1,""],train:[2,4,1,""]},"sonnet.examples.rnn_shakespeare.TextModel":{generate_string:[2,3,1,""]},"sonnet.python":{modules:[4,0,0,"-"],ops:[6,0,0,"-"]},"sonnet.python.modules":{attention:[4,0,0,"-"],base:[4,0,0,"-"],basic:[4,0,0,"-"],basic_rnn:[4,0,0,"-"],batch_norm:[4,0,0,"-"],block_matrix:[4,0,0,"-"],clip_gradient:[4,0,0,"-"],conv:[4,0,0,"-"],embed:[4,0,0,"-"],experimental:[4,0,0,"-"],gated_rnn:[4,0,0,"-"],layer_norm:[4,0,0,"-"],nets:[5,0,0,"-"],pondering_rnn:[4,0,0,"-"],residual:[4,0,0,"-"],rnn_core:[4,0,0,"-"],scale_gradient:[4,0,0,"-"],sequential:[4,0,0,"-"],spatial_transformer:[4,0,0,"-"],util:[4,0,0,"-"]},"sonnet.python.modules.attention":{AttentionOutput:[4,1,1,""],AttentiveRead:[4,1,1,""]},"sonnet.python.modules.attention.AttentionOutput":{read:[4,2,1,""],weight_logits:[4,2,1,""],weights:[4,2,1,""]},"sonnet.python.modules.base":{AbstractModule:[4,1,1,""],ConnectedSubGraph:[4,1,1,""],DifferentGraphError:[4,6,1,""],Error:[4,6,1,""],IncompatibleShapeError:[4,6,1,""],Module:[4,1,1,""],NotConnectedError:[4,6,1,""],NotInitializedError:[4,6,1,""],NotSupportedError:[4,6,1,""],ParentNotBuiltError:[4,6,1,""],SubgraphInputs:[4,1,1,""],Transposable:[4,1,1,""],UnderspecifiedError:[4,6,1,""]},"sonnet.python.modules.base.AbstractModule":{connected_subgraphs:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],get_variables:[4,3,1,""],is_connected:[4,2,1,""],last_connected_subgraph:[4,2,1,""],module_name:[4,2,1,""],name_scopes:[4,2,1,""],scope_name:[4,2,1,""],variable_scope:[4,2,1,""]},"sonnet.python.modules.base.ConnectedSubGraph":{builder:[4,2,1,""],inputs:[4,2,1,""],name_scope:[4,2,1,""],outputs:[4,2,1,""]},"sonnet.python.modules.base.SubgraphInputs":{args:[4,2,1,""],kwargs:[4,2,1,""]},"sonnet.python.modules.base.Transposable":{input_shape:[4,3,1,""],transpose:[4,3,1,""]},"sonnet.python.modules.basic":{AddBias:[4,1,1,""],BatchApply:[4,1,1,""],BatchFlatten:[4,1,1,""],BatchReshape:[4,1,1,""],FlattenTrailingDimensions:[4,1,1,""],Linear:[4,1,1,""],MergeDims:[4,1,1,""],SelectInput:[4,1,1,""],SliceByDim:[4,1,1,""],TileByDim:[4,1,1,""],TrainableVariable:[4,1,1,""],calculate_bias_shape:[4,4,1,""],create_bias_initializer:[4,4,1,""],create_linear_initializer:[4,4,1,""],merge_leading_dims:[4,4,1,""],split_leading_dim:[4,4,1,""]},"sonnet.python.modules.basic.AddBias":{POSSIBLE_INITIALIZER_KEYS:[4,2,1,""],b:[4,2,1,""],input_shape:[4,2,1,""],transpose:[4,3,1,""]},"sonnet.python.modules.basic.BatchReshape":{input_shape:[4,2,1,""],transpose:[4,3,1,""]},"sonnet.python.modules.basic.Linear":{b:[4,2,1,""],clone:[4,3,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_shape:[4,2,1,""],output_size:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""],transpose:[4,3,1,""],w:[4,2,1,""]},"sonnet.python.modules.basic.TrainableVariable":{POSSIBLE_INITIALIZER_KEYS:[4,2,1,""],w:[4,2,1,""]},"sonnet.python.modules.basic_rnn":{DeepRNN:[4,1,1,""],ModelRNN:[4,1,1,""],VanillaRNN:[4,1,1,""]},"sonnet.python.modules.basic_rnn.DeepRNN":{initial_state:[4,3,1,""],output_size:[4,2,1,""],state_size:[4,2,1,""]},"sonnet.python.modules.basic_rnn.ModelRNN":{output_size:[4,2,1,""],state_size:[4,2,1,""]},"sonnet.python.modules.basic_rnn.VanillaRNN":{HIDDEN_TO_HIDDEN:[4,2,1,""],IN_TO_HIDDEN:[4,2,1,""],POSSIBLE_INITIALIZER_KEYS:[4,2,1,""],hidden_to_hidden_linear:[4,2,1,""],hidden_to_hidden_variables:[4,2,1,""],in_to_hidden_linear:[4,2,1,""],in_to_hidden_variables:[4,2,1,""],output_size:[4,2,1,""],state_size:[4,2,1,""]},"sonnet.python.modules.batch_norm":{BatchNorm:[4,1,1,""],create_beta_initializer:[4,4,1,""],create_gamma_initializer:[4,4,1,""],create_mean_initializer:[4,4,1,""],create_variance_initializer:[4,4,1,""]},"sonnet.python.modules.batch_norm.BatchNorm":{BETA:[4,2,1,""],GAMMA:[4,2,1,""],MOVING_MEAN:[4,2,1,""],MOVING_VARIANCE:[4,2,1,""],POSSIBLE_INITIALIZER_KEYS:[4,2,1,""],POSSIBLE_PARTITIONER_KEYS:[4,2,1,""],POSSIBLE_REGULARIZER_KEYS:[4,2,1,""],beta:[4,2,1,""],gamma:[4,2,1,""],initializers:[4,2,1,""],moving_mean:[4,2,1,""],moving_variance:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""]},"sonnet.python.modules.block_matrix":{BlockDiagonalMatrix:[4,1,1,""],BlockTriangularMatrix:[4,1,1,""]},"sonnet.python.modules.block_matrix.BlockTriangularMatrix":{block_shape:[4,2,1,""],block_size:[4,2,1,""],input_size:[4,2,1,""],num_blocks:[4,2,1,""],output_shape:[4,2,1,""]},"sonnet.python.modules.clip_gradient":{clip_gradient:[4,4,1,""]},"sonnet.python.modules.conv":{Conv1D:[4,1,1,""],Conv1DTranspose:[4,1,1,""],Conv2D:[4,1,1,""],Conv2DTranspose:[4,1,1,""],Conv3D:[4,1,1,""],Conv3DTranspose:[4,1,1,""],DepthwiseConv2D:[4,1,1,""],InPlaneConv2D:[4,1,1,""],SeparableConv2D:[4,1,1,""],create_bias_initializer:[4,4,1,""],create_weight_initializer:[4,4,1,""]},"sonnet.python.modules.conv.Conv1D":{b:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_shape:[4,2,1,""],kernel_shape:[4,2,1,""],output_channels:[4,2,1,""],padding:[4,2,1,""],partitioners:[4,2,1,""],rate:[4,2,1,""],regularizers:[4,2,1,""],stride:[4,2,1,""],transpose:[4,3,1,""],w:[4,2,1,""]},"sonnet.python.modules.conv.Conv1DTranspose":{b:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_shape:[4,2,1,""],kernel_shape:[4,2,1,""],output_channels:[4,2,1,""],output_shape:[4,2,1,""],padding:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""],stride:[4,2,1,""],transpose:[4,3,1,""],w:[4,2,1,""]},"sonnet.python.modules.conv.Conv2D":{b:[4,2,1,""],clone:[4,3,1,""],data_format:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_shape:[4,2,1,""],kernel_shape:[4,2,1,""],mask:[4,2,1,""],output_channels:[4,2,1,""],padding:[4,2,1,""],partitioners:[4,2,1,""],rate:[4,2,1,""],regularizers:[4,2,1,""],stride:[4,2,1,""],transpose:[4,3,1,""],w:[4,2,1,""]},"sonnet.python.modules.conv.Conv2DTranspose":{b:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_shape:[4,2,1,""],kernel_shape:[4,2,1,""],output_channels:[4,2,1,""],output_shape:[4,2,1,""],padding:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""],stride:[4,2,1,""],transpose:[4,3,1,""],w:[4,2,1,""]},"sonnet.python.modules.conv.Conv3D":{b:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_shape:[4,2,1,""],kernel_shape:[4,2,1,""],output_channels:[4,2,1,""],padding:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""],stride:[4,2,1,""],transpose:[4,3,1,""],w:[4,2,1,""]},"sonnet.python.modules.conv.Conv3DTranspose":{b:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_shape:[4,2,1,""],kernel_shape:[4,2,1,""],output_channels:[4,2,1,""],output_shape:[4,2,1,""],padding:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""],stride:[4,2,1,""],transpose:[4,3,1,""],w:[4,2,1,""]},"sonnet.python.modules.conv.DepthwiseConv2D":{b:[4,2,1,""],channel_multiplier:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_channels:[4,2,1,""],input_shape:[4,2,1,""],kernel_shape:[4,2,1,""],output_channels:[4,2,1,""],padding:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""],stride:[4,2,1,""],w:[4,2,1,""]},"sonnet.python.modules.conv.InPlaneConv2D":{b:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_channels:[4,2,1,""],input_shape:[4,2,1,""],kernel_shape:[4,2,1,""],output_channels:[4,2,1,""],padding:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""],stride:[4,2,1,""],w:[4,2,1,""]},"sonnet.python.modules.conv.SeparableConv2D":{b:[4,2,1,""],channel_multiplier:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],has_bias:[4,2,1,""],initializers:[4,2,1,""],input_channels:[4,2,1,""],input_shape:[4,2,1,""],kernel_shape:[4,2,1,""],output_channels:[4,2,1,""],padding:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""],stride:[4,2,1,""],w_dw:[4,2,1,""],w_pw:[4,2,1,""]},"sonnet.python.modules.embed":{Embed:[4,1,1,""]},"sonnet.python.modules.embed.Embed":{EMBEDDINGS:[4,2,1,""],POSSIBLE_INITIALIZER_KEYS:[4,2,1,""],embed_dim:[4,2,1,""],embeddings:[4,2,1,""],vocab_size:[4,2,1,""]},"sonnet.python.modules.experimental":{reuse_vars:[4,4,1,""]},"sonnet.python.modules.gated_rnn":{BatchNormLSTM:[4,1,1,""],Conv1DLSTM:[4,1,1,""],Conv2DLSTM:[4,1,1,""],ConvLSTM:[4,1,1,""],GRU:[4,1,1,""],LSTM:[4,1,1,""]},"sonnet.python.modules.gated_rnn.BatchNormLSTM":{get_possible_initializer_keys:[4,5,1,""]},"sonnet.python.modules.gated_rnn.Conv1DLSTM":{get_possible_initializer_keys:[4,5,1,""]},"sonnet.python.modules.gated_rnn.Conv2DLSTM":{get_possible_initializer_keys:[4,5,1,""]},"sonnet.python.modules.gated_rnn.ConvLSTM":{convolutions:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],output_size:[4,2,1,""],state_size:[4,2,1,""]},"sonnet.python.modules.gated_rnn.GRU":{BH:[4,2,1,""],BR:[4,2,1,""],BZ:[4,2,1,""],POSSIBLE_INITIALIZER_KEYS:[4,2,1,""],POSSIBLE_KEYS:[4,2,1,""],UH:[4,2,1,""],UR:[4,2,1,""],UZ:[4,2,1,""],WH:[4,2,1,""],WR:[4,2,1,""],WZ:[4,2,1,""],get_possible_initializer_keys:[4,5,1,""],output_size:[4,2,1,""],state_size:[4,2,1,""]},"sonnet.python.modules.layer_norm":{LayerNorm:[4,1,1,""],create_beta_initializer:[4,4,1,""],create_gamma_initializer:[4,4,1,""]},"sonnet.python.modules.layer_norm.LayerNorm":{BETA:[4,2,1,""],GAMMA:[4,2,1,""],POSSIBLE_INITIALIZER_KEYS:[4,2,1,""],POSSIBLE_KEYS:[4,2,1,""],beta:[4,2,1,""],gamma:[4,2,1,""],initializers:[4,2,1,""],partitioners:[4,2,1,""],regularizers:[4,2,1,""]},"sonnet.python.modules.nets":{alexnet:[5,0,0,"-"],convnet:[5,0,0,"-"],dilation:[5,0,0,"-"],mlp:[5,0,0,"-"]},"sonnet.python.modules.nets.alexnet":{AlexNet:[5,1,1,""]},"sonnet.python.modules.nets.alexnet.AlexNet":{FULL:[5,2,1,""],HALF:[5,2,1,""],MINI:[5,2,1,""],POSSIBLE_INITIALIZER_KEYS:[5,2,1,""],conv_modules:[5,2,1,""],initializers:[5,2,1,""],linear_modules:[5,2,1,""],min_input_size:[5,2,1,""],partitioners:[5,2,1,""],regularizers:[5,2,1,""]},"sonnet.python.modules.nets.convnet":{ConvNet2D:[5,1,1,""],ConvNet2DTranspose:[5,1,1,""]},"sonnet.python.modules.nets.convnet.ConvNet2D":{POSSIBLE_INITIALIZER_KEYS:[5,2,1,""],POSSIBLE_KEYS:[5,2,1,""],activate_final:[5,2,1,""],activation:[5,2,1,""],initializers:[5,2,1,""],input_shape:[5,2,1,""],kernel_shapes:[5,2,1,""],layers:[5,2,1,""],output_channels:[5,2,1,""],paddings:[5,2,1,""],partitioners:[5,2,1,""],regularizers:[5,2,1,""],strides:[5,2,1,""],transpose:[5,3,1,""],use_batch_norm:[5,2,1,""],use_bias:[5,2,1,""]},"sonnet.python.modules.nets.convnet.ConvNet2DTranspose":{output_shapes:[5,2,1,""],transpose:[5,3,1,""]},"sonnet.python.modules.nets.dilation":{Dilation:[5,1,1,""],identity_kernel_initializer:[5,4,1,""],noisy_identity_kernel_initializer:[5,4,1,""]},"sonnet.python.modules.nets.dilation.Dilation":{BASIC:[5,2,1,""],BIASES:[5,2,1,""],LARGE:[5,2,1,""],POSSIBLE_INITIALIZER_KEYS:[5,2,1,""],WEIGHTS:[5,2,1,""],conv_modules:[5,2,1,""]},"sonnet.python.modules.nets.mlp":{MLP:[5,1,1,""]},"sonnet.python.modules.nets.mlp.MLP":{activate_final:[5,2,1,""],activation:[5,2,1,""],get_possible_initializer_keys:[5,5,1,""],initializers:[5,2,1,""],input_shape:[5,2,1,""],layers:[5,2,1,""],output_size:[5,2,1,""],output_sizes:[5,2,1,""],partitioners:[5,2,1,""],regularizers:[5,2,1,""],transpose:[5,3,1,""],use_bias:[5,2,1,""]},"sonnet.python.modules.pondering_rnn":{ACTCore:[4,1,1,""]},"sonnet.python.modules.pondering_rnn.ACTCore":{batch_size:[4,2,1,""],dtype:[4,2,1,""],initial_state:[4,3,1,""],output_size:[4,2,1,""],state_size:[4,2,1,""]},"sonnet.python.modules.residual":{Residual:[4,1,1,""],ResidualCore:[4,1,1,""],SkipConnectionCore:[4,1,1,""]},"sonnet.python.modules.residual.ResidualCore":{output_size:[4,2,1,""],state_size:[4,2,1,""]},"sonnet.python.modules.residual.SkipConnectionCore":{output_size:[4,2,1,""],state_size:[4,2,1,""]},"sonnet.python.modules.rnn_core":{RNNCore:[4,1,1,""],TrainableInitialState:[4,1,1,""],trainable_initial_state:[4,4,1,""]},"sonnet.python.modules.rnn_core.RNNCore":{initial_state:[4,3,1,""],output_size:[4,2,1,""],state_size:[4,2,1,""],zero_state:[4,3,1,""]},"sonnet.python.modules.scale_gradient":{scale_gradient:[4,4,1,""]},"sonnet.python.modules.sequential":{Sequential:[4,1,1,""]},"sonnet.python.modules.sequential.Sequential":{layers:[4,2,1,""]},"sonnet.python.modules.spatial_transformer":{AffineGridWarper:[4,1,1,""],AffineWarpConstraints:[4,1,1,""],GridWarper:[4,1,1,""]},"sonnet.python.modules.spatial_transformer.AffineGridWarper":{constraints:[4,2,1,""],inverse:[4,3,1,""]},"sonnet.python.modules.spatial_transformer.AffineWarpConstraints":{combine_with:[4,3,1,""],constraints:[4,2,1,""],mask:[4,2,1,""],no_constraints:[4,5,1,""],no_shear_2d:[4,5,1,""],no_shear_3d:[4,5,1,""],num_dim:[4,2,1,""],num_free_params:[4,2,1,""],scale_2d:[4,5,1,""],scale_3d:[4,5,1,""],shear_2d:[4,5,1,""],translation_2d:[4,5,1,""],translation_3d:[4,5,1,""]},"sonnet.python.modules.spatial_transformer.GridWarper":{n_coeff:[4,2,1,""],output_shape:[4,2,1,""],psi:[4,2,1,""],source_shape:[4,2,1,""]},"sonnet.python.modules.util":{check_initializers:[4,4,1,""],check_partitioners:[4,4,1,""],check_regularizers:[4,4,1,""],format_variable_map:[4,4,1,""],format_variables:[4,4,1,""],get_normalized_variable_map:[4,4,1,""],get_saver:[4,4,1,""],get_variables_in_module:[4,4,1,""],get_variables_in_scope:[4,4,1,""],has_variable_scope:[4,4,1,""],log_variables:[4,4,1,""],name_for_callable:[4,4,1,""],reuse_variables:[4,4,1,""],to_snake_case:[4,4,1,""],variable_map_items:[4,4,1,""]},"sonnet.python.ops":{initializers:[6,0,0,"-"],nest:[6,0,0,"-"],resampler:[6,0,0,"-"]},"sonnet.python.ops.initializers":{restore_initializer:[6,2,1,""]},"sonnet.python.ops.nest":{flatten_iterable:[6,4,1,""],is_iterable:[6,4,1,""],pack_iterable_as:[6,4,1,""]},"sonnet.python.ops.resampler":{resampler:[6,4,1,""],resampler_is_available:[6,4,1,""]},sonnet:{examples:[2,0,0,"-"],python:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:classmethod","6":"py:exception"},terms:{"3555v1":4,"abstract":4,"boolean":[4,5],"break":[4,5],"case":[2,4,6],"char":2,"class":[2,4,5],"default":[2,4,5],"final":[4,5],"float":[4,5],"function":[1,2,4,5,6],"import":[1,4],"int":[2,4,5],"new":4,"null":2,"public":1,"return":[2,4,5,6],"super":4,"switch":4,"true":[2,4,5,6],"try":4,"while":4,ARE:4,For:[4,6],One:[2,4],Ops:4,Such:4,The:[1,2,4,5,6],Then:4,These:[4,6],Used:2,__call__:[1,4],__init__:[1,4],_baselstm:4,_build:4,_clone:4,_enter_variable_scop:4,_eos_:2,_null_:2,_restor:6,_sentinel:4,_transpos:4,_unk_:2,abl:5,about:4,abov:4,abs:[4,5],abstractmodul:[2,4,5],accept:[2,4],access:4,accord:4,accuraci:4,achiev:4,across:[2,4,5],act:4,act_cor:4,act_out:4,actcor:4,activ:[4,5],activate_fin:5,adapt:4,add:[2,4],add_x:4,addbia:4,added:5,adding:4,addit:4,addition:4,additional_constraint:4,advanc:4,advantag:4,affect:4,affin:4,affine_grid_warp:4,affinegridwarp:4,affinewarpconstraint:4,after:4,aggreg:[4,5],agnost:4,aid:4,alex:5,alex_net:5,alexnet:[1,3,4],alexnet_test:[1,3,4],algorithm:4,alia:[2,4,6],all:[4,5],allow:[4,5],along:4,alreadi:4,also:[4,6],alwai:4,ani:[1,4],anoth:4,anyhow:4,anyth:4,apart:6,api:4,append:[4,5],appli:[4,5],arbitrari:4,arbitrarili:[4,6],architectur:[4,5],archiv:4,aren:4,arg:[2,4,5,6],argument:[2,4],ariti:4,around:4,arrai:[2,6],arxiv:[4,5],assembl:4,assign:4,assum:2,attempt:4,attend:4,attent:[1,3],attention_logit_mod:4,attention_test:[1,3],attentionoutput:4,attentiveread:4,attribut:4,attributeerror:4,automat:[1,4],avail:4,averag:[2,4],awai:4,axi:4,backward:4,base:[1,2,3,5],base_cor:4,base_modul:4,base_num_channel:5,base_test:[1,3],basi:5,basic:[1,3,5],basic_rnn:[1,3],basic_rnn_test:[1,3],basic_test:[1,3],batch:[2,4,5],batch_appli:4,batch_dim_from:4,batch_flatten:4,batch_norm:[1,3],batch_norm_config:5,batch_norm_lstm:4,batch_norm_test:[1,3],batch_reshap:4,batch_siz:[2,4,6],batchappli:4,batchflatten:4,batchnorm:[2,4],batchnormlstm:4,batchreshap:4,bazel:2,becaus:4,becom:4,been:[2,4],befor:[2,4,5],begin:4,behaviour:2,being:4,beta:4,better:4,between:4,bia:4,bias:[4,5],bias_dim:4,bias_shap:4,bilinear:6,block:4,block_diagonal_matrix:4,block_matrix:[1,3],block_matrix_test:[1,3],block_row:4,block_shap:4,block_siz:4,block_triangular_matrix:4,blockdiagonalmatrix:4,blocktriangularmatrix:4,bool:2,both:[4,5],brief:1,broadcast:4,broader:4,build:[2,4,5],build_graph:2,builder:4,built:4,c_t:4,cach:4,calcul:4,calculate_bias_shap:4,call:[1,2,4,5,6],callabl:4,caller:4,camel_cas:4,camelcas:4,can:[1,4,5],candid:4,cannot:[2,4],care:4,carefulli:4,caveat:4,cell:4,cell_clip_valu:4,chang:4,channel:[4,5],channel_multipli:4,char_eo:2,charact:2,cheat:4,check:4,check_initi:4,check_partition:4,check_regular:4,checkpoint:[4,6],child:4,choos:4,cifar10:5,classif:5,classmethod:[4,5],clip:4,clip_gradi:[1,3],clip_gradient_test:[1,3],clip_value_max:4,clip_value_min:4,clip_values_max:4,clone:4,code:4,coeffici:4,coher:4,collect:4,column:4,com:4,combin:4,combine_with:4,command:2,common:[4,5],compat:4,compil:6,complement:6,complementari:4,compli:4,compon:4,comput:[2,4],concat:4,concat_final_output_if_skip:4,concaten:4,conceptu:1,configur:4,connect:[1,4,5],connected_subgraph:4,connectedsubgraph:4,consid:6,consist:[4,5],constitu:4,constraint:4,construct:[2,4,5,6],constructor:4,contain:[1,4,5,6],content:0,context:[4,5],contraint:4,contrib:4,contribut:4,control:[2,4],control_depend:4,conv1d:4,conv1dlstm:4,conv1dtranspos:4,conv2d:[4,5],conv2d_transpos:4,conv2dlstm:4,conv2dtranspos:4,conv3d:4,conv3d_transpos:4,conv3dtranspos:4,conv:[1,3,5],conv_1d:4,conv_1d_lstm:4,conv_1d_transpos:4,conv_2d:4,conv_2d_depthwis:4,conv_2d_lstm:4,conv_2d_transpos:4,conv_3d:4,conv_3d_transpos:4,conv_gpu_test:[1,3],conv_lstm:4,conv_modul:5,conv_ndim:4,conv_net_2d:5,conv_net_2d_transpos:5,conv_test:[1,3],convert:6,convlstm:4,convnet2d:5,convnet2dtranspos:5,convnet:[1,3,4],convnet_test:[1,3,4],convnettranspose2d:5,convolut:[4,5],coordin:6,copi:[4,5],core:[2,4,6],correct:4,correctli:4,correspond:[2,4,5],cost:2,count:[4,6],cpu:2,creat:4,create_beta_initi:4,create_bias_initi:4,create_featur:4,create_gamma_initi:4,create_linear_initi:4,create_mean_initi:4,create_variance_initi:4,create_weight_initi:4,creation:4,cross:2,current:[4,6],curv:4,custom:[2,3,4,6],custom_build:2,custom_gett:4,cut:5,data:[2,4,5,6],data_fil:2,data_format:4,data_height:6,data_num_channel:6,data_width:6,dataset:2,dataset_shakespear:[0,1],deal:[4,6],decay_r:4,decis:4,declar:4,decod:2,decor:4,deep:[2,5],deep_rnn:4,deeper:4,deepmind:4,deeprnn:[4,5],def:4,default_start_token:2,defer:4,defin:[4,5,6],definit:4,deliber:[2,4],deprec:4,depthwis:4,depthwise_conv2d:4,depthwiseconv2d:4,deriv:4,describ:4,design:[2,4],desir:[4,5],detail:4,determin:[4,5,6],deviat:[4,5],devic:4,diagon:4,dict:[4,6],dictionari:[4,5,6],differ:[2,4,5,6],differentgrapherror:4,differenti:6,dilat:[1,3,4],dilation_test:[1,3,4],dim:4,dim_0:6,dim_from:4,dim_n:6,dimens:[2,4,5,6],dimension:4,disk:2,distinct:4,distribut:[4,6],divid:5,doe:[4,5],doesn:4,down:[4,5],dtype:[2,4,5],dual:5,duplic:4,dure:[4,6],dynamic_rnn:4,each:[1,2,4],easi:4,easili:2,effect:4,either:4,element:[2,4,6],elsewher:4,emb:[1,3],embed:4,embed_dim:4,embed_test:[1,3],empti:4,enabl:[2,4],encapsul:2,encod:2,ension:4,ensur:4,enter:4,entir:4,entri:[4,5],entropi:2,eps:4,epsilon:4,equal:[4,5],equival:4,error:4,essenti:5,etc:4,evalu:4,even:4,everi:4,everyth:1,exampl:[0,1,4,6],except:[4,5],exclud:4,exhibit:4,exist:4,existing_vocab:4,expect:4,expens:4,experiment:[1,3],explicitli:4,exponenti:4,expos:4,extern:4,extra:4,fact:4,factor:4,fall:4,fals:[2,4,5],fan_in_shap:4,far:4,featur:4,feed:4,few:4,field:[2,4],file:4,fill:4,filter:[4,5],final_st:4,fine:4,finish:4,first:[2,4],fisher:5,fix:4,flag:[2,4],flat:6,flat_iter:6,flat_sequ:6,flatten:[4,6],flatten_iter:6,flattentrailingdimens:4,float32:[2,4,5],follow:[1,2,4],forget:4,forget_bia:4,formal:5,format:4,format_vari:4,format_variable_map:4,forward:4,found:4,from:[2,4,6],full:[4,5],fulli:[4,5],func:4,further:4,furthermor:4,fuse:4,gamma:4,gate:4,gated_rnn:[1,3],gated_rnn_test:[1,3],gener:[2,4,6],generate_str:2,geoffrei:5,get:4,get_collect:4,get_normalized_variable_map:4,get_possible_initializer_kei:[4,5],get_sav:4,get_shap:4,get_state_for_halt:4,get_vari:4,get_variables_in_modul:4,get_variables_in_scop:4,github:4,given:[4,6],global:4,global_vari:4,googl:4,gpu:5,gradient:4,grammar:4,graph:[1,2,4],graphkei:4,greater:4,grid:4,gridwarp:4,group:4,group_sliced_vari:4,gru:4,h_t:4,half:[4,5],handl:4,hard:4,has:[2,4,5],has_bia:4,has_variable_scop:4,have:[4,6],height:[4,5],helper:4,henc:4,here:4,hidden:4,hidden_clip_valu:4,hidden_s:4,hidden_to_hidden:4,hidden_to_hidden_linear:4,hidden_to_hidden_vari:4,higher:4,hinton:5,hold:4,hole:4,hot:2,how:4,howev:[2,4],http:[4,5],human:2,iclr:5,ident:[4,5],identity_kernel_initi:5,ids:4,idx:4,iff:4,ignor:[4,5],ilya:5,imag:4,imagenet:5,immedi:4,implement:[4,5],importerror:6,improv:4,in_channel:5,in_plane_conv2d:4,in_to_hidden:4,in_to_hidden_linear:4,in_to_hidden_vari:4,includ:[4,5],include_diagon:4,include_off_diagon:4,incompat:4,incompatibleshapeerror:4,incorpor:4,increas:4,independ:4,indic:[2,4],individu:4,infer:4,info:4,inform:[4,5],inherit:4,initi:[1,3,4,5],initial_learning_r:2,initial_logit:2,initial_st:[2,4],inplaneconv2d:4,input0:4,input1:4,input2:4,input:[2,4,5,6],input_channel:4,input_example_index:4,input_s:4,input_sequ:4,input_shap:[4,5],input_tensor:4,insid:[4,5],instanc:4,instanti:4,instead:4,instruct:4,int32:4,integ:[2,4,5],interfac:[4,5],intermedi:4,intern:4,interpol:6,intial:[4,5],introduc:4,invers:4,invoc:4,invok:4,is_connect:4,is_iter:6,is_train:[2,4],iter:[4,5,6],its:[4,5],itself:4,join_lin:4,just:[4,6],keep_prob:2,kei:[4,6],kernel:[4,5],kernel_shap:[4,5],keyerror:4,know:4,known:4,koltun:5,krizhevski:5,kwarg:[2,4],label:2,label_batch_entri:2,lambda:4,larg:5,last:[4,5,6],last_connected_subgraph:4,latter:4,layer:[2,4,5],layer_norm:[1,3],layer_norm_test:[1,3],layernorm:4,lead:4,learn:4,learnabl:4,learnt:4,least:4,leav:4,left:4,length:[4,5],less:4,level:1,librari:[1,4],light:4,lightli:4,like:[4,5],limit:4,lin:4,lin_output:4,linear:[1,4,5],linear_modul:5,linear_transpos:4,list:[2,4,5,6],littl:4,load:2,local:4,locat:4,log:4,log_vari:4,logic:2,logit:[2,4],longer:4,look:4,loss:2,low:4,lower:4,lstm1:4,lstm1_output:4,lstm2:4,lstm2_output:4,lstm:[2,4],lstm_depth:2,lstm_next_stat:4,lstm_output:4,made:4,magnitud:5,mai:[1,2,4],main:2,mainli:4,maintain:4,make:[2,4,5],make_templ:4,manipul:4,manual:4,map:4,mask:4,match:[4,5],matric:4,matrix:4,max_grad_norm:2,max_unique_stat:4,maximum:4,mean:4,meant:4,memori:4,mention:4,merg:4,merge_dim:4,merge_leading_dim:4,mergedim:4,method:[2,4],middl:5,might:4,min_input_s:5,mini:[4,5],minibatch:[2,4],minim:5,minimum:[4,5,6],mlp:[1,3,4],mlp_test:[1,3,4],mode:[4,5],model:[2,4,5],model_rnn:4,model_s:5,modelrnn:4,modul:0,module_nam:[4,5],module_or_op:4,module_with_build_arg:[0,1,4],more:4,most:4,move:4,moving_mean:4,moving_vari:4,multi:5,multipl:[4,5],multipli:4,must:[4,5,6],my_module_nam:4,mymodul:4,n_coeff:4,n_dim:4,name:[2,4,5,6],name_for_cal:4,name_scop:4,necessari:4,need:[4,5],nest:[1,3,4],net:[1,3,4],network:[1,4,5],neural:[1,4,5],newlin:2,next:4,next_stat:4,next_state1:4,next_state2:4,nhwc:4,nip:5,no_constraint:4,no_shear_2d:4,no_shear_3d:4,nois:5,noisi:5,noisy_identity_kernel_initi:5,non:[4,5,6],none:[2,4,5],norm:4,normal:[4,5],notat:4,notconnectederror:4,note:[4,5,6],notic:4,notinitializederror:4,notsupportederror:4,num_block:4,num_coeff:4,num_dim:4,num_embed:2,num_free_param:4,num_hidden:2,num_output_class:5,num_step:2,num_training_iter:2,number:[2,4,5],numer:2,numpi:[2,6],obj:[2,4],object:[1,2,4,6],obs:2,obtain:4,occur:4,odd:5,off:[4,5],offer:4,offset:4,often:4,omit:4,onc:4,one:[2,4],onli:[2,4,6],oper:[4,5],ops:[1,3,4],opt:2,optim:4,optimizer_epsilon:2,option:[4,5,6],order:4,org:[4,5],origin:4,other:[4,6],otherwis:5,out:[4,5],out_channel:5,output:[2,4,5,6],output_channel:[4,5],output_s:[2,4,5],output_shap:[4,5],over:4,overrid:4,own:1,pack:6,pack_iterable_a:6,pack_sequence_a:6,packag:0,pad:[4,5],pair:4,paper:[4,5],paramet:4,parametr:4,parent:4,parentnotbuilterror:4,part:[1,4],particular:[2,4],partit:[4,5],partition:[4,5],partition_info:5,pass:[2,4,5],pdf:4,peek:4,peep:4,peephol:4,penalti:4,per:[4,5],perceptron:5,perform:[4,6],permuted_mnist:4,pixel:5,place:[1,4],placehold:4,plai:2,plane:4,pleas:4,point:4,pointwis:4,ponder:4,pondering_rnn:[1,3],pondering_rnn_test:[1,3],possibl:4,possible_initializer_kei:[4,5],possible_kei:[4,5],possible_partitioner_kei:4,possible_regularizer_kei:4,post:4,preced:4,precis:4,predict:5,prefix:4,present:[4,6],preserv:4,preserve_dim:4,prev_stat:4,prev_state1:4,prev_state2:4,previou:4,princip:4,print:2,problem:4,produc:[2,4],progress:4,promot:4,proper:4,properti:[4,5],provid:4,psi:4,pub:4,purpos:4,python:[0,1,2],queri:4,quit:2,rais:[4,5,6],random:2,random_uniform:4,rang:4,rank:[4,6],rate:4,read:4,readabl:2,real:4,reason:4,receiv:4,recent:4,recommend:4,recurr:4,recurs:6,reduc:4,reduce_learning_rate_interv:2,reduce_learning_rate_multipli:2,refer:4,regular:[4,5],rel:4,relev:4,relu:5,remain:4,remaind:4,remov:4,repeatedli:1,replic:2,replica:4,report_interv:2,repres:[4,5],represent:2,request:4,requir:[1,4,5],resampl:[1,3],resampler_is_avail:6,rescal:4,research:4,reset:4,reshap:4,residu:[1,3],residual_cor:4,residual_test:[1,3],residualcor:4,respect:4,rest:4,restor:[4,6],restore_initi:6,restrict:4,result:[4,5],retriev:4,reus:4,reuse_var:4,reuse_vari:4,revers:4,rmsprop:4,rnn:[2,4],rnn_core:[1,3],rnn_core_test:[1,3],rnn_shakespear:[0,1],rnn_shakespeare_test:[0,1],rnncell:4,rnncore:4,row:4,run:[2,4,5],same:[2,4,5,6],sampl:2,sample_length:2,satisfi:4,save:4,saver:4,scalar:[4,5,6],scale:[4,5],scale_2d:4,scale_3d:4,scale_gradi:[1,3],scale_gradient_test:[1,3],scope:4,scope_nam:4,scope_or_modul:4,score:4,script:2,search:4,see:4,seen:4,select:[2,4],select_input:4,selectinput:4,self:[4,5],sens:4,sep:2,separ:[2,4],separable_conv2d:4,separableconv2d:4,seq:6,sequenc:[2,4,6],sequence_length:2,sequencedataopsnomask:2,sequenti:[1,2,3],sequential_test:[1,3],set:[4,5],settl:4,setup:4,shakespear:2,shallow:4,shape:[4,5,6],share:[1,4],shear:4,shear_2d:4,shift:4,should:[1,4],shown:[2,4],sigma:4,signal:4,similar:4,simpl:[2,4],simplest:4,simplifi:4,sinc:[4,6],singl:[4,5,6],size:[4,5],skip:4,skip_connect:4,skip_connection_cor:4,skipconnectioncor:4,slice:4,slice_by_dim:4,slicebydim:4,slight:4,slot:4,small:4,snake_cas:4,snt:[1,2,4],solut:4,some:4,someth:4,sortabl:6,sourc:[2,4,5,6],source_shap:4,space:4,spatial:4,spatial_transform:[1,3],spatial_transformer_test:[1,3],special:4,specif:4,specifi:[4,5],split:4,split_leading_dim:4,spread:5,squar:5,stack:[2,4],standard:[4,5],start:[2,4],state:[2,4],state_s:4,statist:4,stddev:[4,5],steadi:4,step:[2,4],stop_gradi:4,stride:[4,5],string:[2,4,5,6],strip:4,structur:[4,6],sub:2,subclass:4,subgraph:4,subgraphinput:4,submodul:[0,1,3],subpackag:0,subsequ:4,subset:[2,4],subtleti:4,succinct:4,suggest:4,sum:4,superclass:4,support:[4,6],suppos:4,sure:4,sutskev:5,tabl:4,take:[1,4],tanh:4,tanh_output:4,target:2,task:4,technic:4,templat:4,tend:4,tensor:[2,4,5,6],tensorflow:[1,3,4,6],tensorshap:4,test:[2,4],test_local_stat:4,text_model:2,textmodel:2,textual:2,than:4,thank:4,thei:4,them:4,therefor:4,thi:[1,2,4,5,6],think:4,three:[4,5],threshold:4,through:4,thrown:4,thu:4,tied:4,ties:5,tile:4,tile_by_dim:4,tilebydim:4,time:[2,4],time_average_cost:2,timestep:4,tini:2,tiny_shakespeare_dataset:2,tinyshakespearedataset:2,to_human_read:2,to_snake_cas:4,togeth:4,token:[2,4],token_list:2,tokendatasourc:2,too:4,top:1,total:4,toward:4,track:4,tradition:4,trail:4,train:[2,4],train_input:4,train_net:4,train_op:4,trainabl:4,trainable_initi:4,trainable_initial_st:4,trainable_regular:4,trainable_vari:4,trainableinitialst:4,trainablevari:4,transform:4,translat:4,translation_2d:4,translation_3d:4,transorm:4,transpos:[4,5],transposit:4,tri:4,triangular:4,truncat:5,truncation_length:2,tupl:[2,4,5,6],turn:5,twice:4,two:4,type:[4,5],typeerror:[4,6],typic:4,unbound:4,under:4,underspecifiederror:4,unimplementederror:4,uniniti:4,uniquif:4,unit:4,uniti:4,unk:2,unlik:6,unrol:4,until:4,unused_argv:2,unused_bias_shap:4,unused_kwarg:4,updat:4,update_cel:4,update_op:4,update_ops_collect:4,upper:4,usag:4,use:[2,4],use_batch_norm:5,use_batch_norm_c:4,use_batch_norm_h:4,use_batch_norm_x:4,use_bia:[4,5],use_dynamic_rnn:2,use_peephol:4,use_skip_connect:2,used:[1,4,5],useful:4,user:[4,6],uses:4,using:[2,4],util:[1,3,6],util_test:[1,3],valid:[2,4,5],valu:[4,5,6],valueerror:[4,5,6],vanilla:4,vanilla_rnn:4,vanillarnn:4,vari:4,variabl:[1,4],variable_map:4,variable_map_item:4,variable_scop:4,variablescop:4,varianc:4,variant:5,vector:4,veri:4,version:[2,4,5,6],vgg:5,via:4,vladlen:5,vocab_data_fil:2,vocab_s:[2,4],vocabulari:4,volumetr:4,w_dw:4,w_h:4,w_pw:4,w_x:4,wai:4,want:4,warn:4,warp:[4,6],warper:4,weight:[4,5],weight_logit:4,well:4,were:4,what:4,when:[2,4,5,6],whenev:4,where:[4,5],wherea:4,whether:[2,4],which:[1,2,4,5,6],whole:[2,4],whose:4,wider:4,width:5,wildcard:4,wire:4,wise:4,wish:4,with_batch_norm_control:4,within:4,without:4,won:4,word:2,word_eo:2,work:4,would:4,wrap:[2,4],wrapper:[4,6],wrong:4,x_t:4,yet:4,yield:4,you:4,your:4,zero:4,zero_st:4},titles:["sonnet","sonnet package","sonnet.examples package","sonnet.python package","sonnet.python.modules package","sonnet.python.modules.nets package","sonnet.python.ops package"],titleterms:{alexnet:5,alexnet_test:5,attent:4,attention_test:4,base:4,base_test:4,basic:4,basic_rnn:4,basic_rnn_test:4,basic_test:4,batch_norm:4,batch_norm_test:4,block_matrix:4,block_matrix_test:4,clip_gradi:4,clip_gradient_test:4,content:[1,2,3,4,5,6],conv:4,conv_gpu_test:4,conv_test:4,convnet:5,convnet_test:5,dataset_shakespear:2,dilat:5,dilation_test:5,emb:4,embed_test:4,exampl:2,experiment:4,gated_rnn:4,gated_rnn_test:4,initi:6,layer_norm:4,layer_norm_test:4,mlp:5,mlp_test:5,modul:[1,2,3,4,5,6],module_with_build_arg:2,nest:6,net:5,ops:6,packag:[1,2,3,4,5,6],pondering_rnn:4,pondering_rnn_test:4,python:[3,4,5,6],resampl:6,residu:4,residual_test:4,rnn_core:4,rnn_core_test:4,rnn_shakespear:2,rnn_shakespeare_test:2,scale_gradi:4,scale_gradient_test:4,sequenti:4,sequential_test:4,sonnet:[0,1,2,3,4,5,6],spatial_transform:4,spatial_transformer_test:4,submodul:[2,4,5,6],subpackag:[1,3,4],util:4,util_test:4}})